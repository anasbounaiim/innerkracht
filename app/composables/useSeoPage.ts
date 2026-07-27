export function useSeoPage(title: string, description: string, image?: string) {
  const config=useRuntimeConfig(); const route=useRoute()
  useSeoMeta({ title, titleTemplate:'%s · Innerkracht', description, ogTitle:title, ogDescription:description, ogType:'website', ogImage:image, twitterCard:'summary_large_image' })
  useHead({ link:[{rel:'canonical',href:`${config.public.siteUrl}${route.path}`} ] })
}
