export interface Media { id: number; url: string; alt: string; width?: number; height?: number }
export interface Service { slug: string; title: string; summary: string; details: string[]; image: string; audience?: string; practical?: string }
export interface Testimonial { name: string; text: string; service?: string }
export interface Faq { question: string; answer: string }
export interface Post { id: number; slug: string; title: string; excerpt: string; content: string; date: string; image?: string }
export interface PageContent { slug: string; title: string; content: string; excerpt: string; image?: string }
