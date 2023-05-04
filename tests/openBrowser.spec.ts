import { test, expect, chromium } from '@playwright/test';

test('Open letcode', async ({page}) => {
    const browser = await chromium.launch({
        headless: true
    })
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://letcode.in/')
    await browser.close()
})