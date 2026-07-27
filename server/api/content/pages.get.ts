import { wpFetch, type WpEntity } from '../../utils/wordpress'

export default defineEventHandler(async () => {
  try {
    const pages = await wpFetch<WpEntity[]>('/pages?per_page=100&_embed=1')
    return { source:'wordpress', items:pages }
  } catch {
    setResponseHeader(useEvent(), 'X-Content-Source', 'fallback')
    return { source:'fallback', items:[] }
  }
})
