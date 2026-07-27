export const stripHtml = (html = '') => html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
export const decodeHtml = (text = '') => text.replace(/&#038;/g, '&').replace(/&amp;/g, '&').replace(/&#8217;/g, '’').replace(/&quot;/g, '"')
