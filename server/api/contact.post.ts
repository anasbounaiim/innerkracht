import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().max(120),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(0)
})
const attempts = new Map<string, { count:number; reset:number }>()

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor:true }) || 'unknown'
  const now = Date.now()
  const rate = attempts.get(ip)
  if (rate && rate.reset > now && rate.count >= 5) throw createError({ statusCode:429, statusMessage:'Probeer het later opnieuw.' })
  attempts.set(ip, rate && rate.reset > now ? { ...rate, count:rate.count + 1 } : { count:1, reset:now + 15 * 60_000 })
  const result = schema.safeParse(await readBody(event))
  if (!result.success) throw createError({ statusCode:400, statusMessage:'Controleer de ingevulde velden.' })

  const config = useRuntimeConfig()
  if (!config.contactRecipientEmail) {
    if (process.env.NODE_ENV === 'production') throw createError({ statusCode:503, statusMessage:'Het formulier is nog niet geconfigureerd. Mail rechtstreeks naar Tom@innerkracht.be.' })
    return { ok:true, development:true }
  }
  throw createError({ statusCode:501, statusMessage:'Koppel vóór productie de bestaande WordPress mail-endpoint. Mail voorlopig rechtstreeks naar Tom@innerkracht.be.' })
})
