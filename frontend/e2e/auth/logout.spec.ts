import test, { expect, type Page } from '@playwright/test';

async function loginAsTestUser(page: Page, email: string, password: string) {
  await page.goto('/login');
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill(password);
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.waitForURL('/dashboard');
};

test('logout invalidates the session and redirects to login page', async ({ page }) => {
  const email = process.env.E2E_USER_EMAIL!;
  const password = process.env.E2E_USER_PASSWORD!;

  await loginAsTestUser(page, email, password);

  await page.getByRole('button', { name: 'Logout' }).click();

  await expect(page).toHaveURL('/login');

  await page.goto('/dashboard');

  await expect(page).toHaveURL('/login');
});

