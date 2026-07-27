import { expect, test } from '@playwright/test'
test('homepage and main navigation work',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{level:1})).toContainText('Van blokkade');await page.getByRole('link',{name:'Bekijk het aanbod'}).click();await expect(page).toHaveURL(/aanbod/)})
test('faq supports keyboard activation',async({page})=>{await page.goto('/veelgestelde-vragen');const button=page.getByRole('button',{name:/Blijf ik/});await button.focus();await page.keyboard.press('Enter');await expect(button).toHaveAttribute('aria-expanded','false')})
test('contact rejects invalid content',async({page})=>{await page.goto('/contact');await page.getByRole('button',{name:'Verstuur bericht'}).click();await expect(page.locator('input:invalid')).toHaveCount(3)})
test('unknown content returns 404',async({page})=>{await page.goto('/bestaat-niet');await expect(page.getByRole('heading',{level:1})).toContainText('bestaat niet')})
