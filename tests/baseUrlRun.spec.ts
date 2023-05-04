import { test, expect, chromium } from '@playwright/test';

test('Open letcode', async ({page}) => {
    const browser = await chromium.launch({
        headless: true
    })
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('services/');
    await page.getByText('Home Services Let us do it for you').click();
    await page.getByRole('link', { name: 'Bathroom Remodeling' }).click();
    await page.getByText('Check to see if a free in-home consultation is available in your area Zip code N').click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('30339');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('radio', { name: 'Main' }).click();
    await page.locator('input[name="fname"]').click();
    await page.locator('input[name="fname"]').fill('Test');
    await page.locator('input[name="lname"]').click();
    await page.locator('input[name="lname"]').fill('Test');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('Newbury Pl');
    await page.getByText('What’s your address? AddressApt., SuiteChoose your city:Please select one Atlant').click();
    await page.locator('select[name="city"]').selectOption('Sandy Springs, GA');
    await page.getByText('What’s your address? AddressApt., SuiteChoose your city:Please select one Atlant').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('input[name="email"]').fill('qa@homedepot.com');
    await page.locator('input[name="email"]').press('Tab');
    await page.locator('input[name="phone"]').fill('(987) 654-3210');
    await page.getByText('Get text updates about my project').click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('Tell us more about it').fill('Playwright Automation Testing is great !!!');
    await page.getByText('Anything else we should know? (Optional) 108 Previous Submit').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await browser.close()
})
