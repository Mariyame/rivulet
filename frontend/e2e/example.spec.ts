import { test, expect } from '@playwright/test'

test('support page shows help heading', async ({ page }) => {
  await page.goto('http://localhost:3000/support')

  await expect(page).toHaveURL('http://localhost:3000/support')
  await expect(page.getByRole('heading', { name: 'How can we help?' })).toBeVisible()
})