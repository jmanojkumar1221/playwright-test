import { test, expect, chromium } from '@playwright/test';

test('Open letcode', async () => {
    const browser = await chromium.launch({
        headless: true
    })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('/');


// await browserType.launchPersistentContext(userDataDir);
// await browserType.launchPersistentContext(userDataDir, options);


})

