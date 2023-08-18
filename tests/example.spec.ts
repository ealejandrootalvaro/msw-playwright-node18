import { expect, test } from './test';

test('should start page', async ({ page }, testInfo) => {
  await page.goto('https://www.google.com/');
  expect(true).toBeTruthy();
  await expect(await page.screenshot()).toMatchSnapshot('main-page.png');
});
