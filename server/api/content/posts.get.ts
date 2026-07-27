import { wpFetch, type WpEntity } from '../../utils/wordpress'

export default defineEventHandler(async () => {
  try {
    const posts = await wpFetch<WpEntity[]>('/posts?per_page=20&_embed=1')
    return { source:'wordpress', items:posts }
  } catch {
    return { source:'fallback', items:[] }
  }
})
