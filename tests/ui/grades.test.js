const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('http://localhost:8080/My-Grades');
    const list = await page.$('h1');
    expect(list).toBeTruthy();
  });
  