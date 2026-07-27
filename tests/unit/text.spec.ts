import { describe, expect, it } from 'vitest'
import { decodeHtml, stripHtml } from '../../app/utils/text'
describe('text helpers',()=>{ it('sanitises WP excerpts',()=>expect(stripHtml('<p>Rust <b>van binnen</b></p>')).toBe('Rust van binnen')); it('decodes common entities',()=>expect(decodeHtml('Tom &amp; Innerkracht')).toBe('Tom & Innerkracht')) })
