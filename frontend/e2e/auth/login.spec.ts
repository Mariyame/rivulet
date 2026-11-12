import { test, expect } from '@playwright/test';

const email = process.env.E2E_USER_EMAIL!;
const password = process.env.E2E_USER_PASSWORD!;

test('user can log in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill(password);

  await page.getByRole('button', { name: 'Log in'   , exact: true }).click();

  await expect(page).toHaveURL('/dashboard');
  await expect(
    page.getByRole('navigation', { name: 'breadcrumb' }).getByText('Dashboard', { exact: true })
  ).toBeVisible();
}); 

test('user cannot log in with invalid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('WrongPassword123!');

  await page.getByRole('button', { name: 'Log in'   , exact: true }).click();

  await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});

test('user cannot submit the login form with empty fields', async ({ page }) => {
  await page.goto('/login');

  const emailInput = page.getByRole('textbox', { name: 'Email' });
  const passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });

  await page.getByRole('button', { name: 'Log in'   , exact: true }).click();

  await expect(await emailInput.evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);
  await expect(await passwordInput.evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);

  await expect(page).toHaveURL('/login');
});

test('user cannot submit the login form with invalid email format', async ({ page }) => {
  await page.goto('/login');

  const emailInput = page.getByRole('textbox', { name: 'Email' });
  const passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });

  await emailInput.fill('invalid-email-format');
  await passwordInput.fill(password);

  await page.getByRole('button', { name: 'Log in'   , exact: true }).click();

  await expect(await emailInput.evaluate((input: HTMLInputElement) => input.validity.typeMismatch)).toBe(true);
  await expect(await passwordInput.evaluate((input: HTMLInputElement) => input.validity.valid)).toBe(true);

  await expect(page).toHaveURL('/login');
});

test('user cannot access dashboard without logging in', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page).toHaveURL('/login');
}); 