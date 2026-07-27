interface WpRendered { rendered: string }
export interface WpEntity { id:number; slug:string; date:string; title:WpRendered; content:WpRendered; excerpt:WpRendered; _embedded?: Record<string, unknown> }

export async function wpFetch<T>(path: string): Promise<T> {
  const config = useRuntimeConfig()
  const fetcher = $fetch as unknown as (url: string, options: Record<string, unknown>) => Promise<unknown>
  return await fetcher(`${config.wordpressApiUrl}${path}`, { retry: 1, timeout: 5000 }) as T
}
