const env  = require('../env/env.config.js');
const { test } = require('@playwright/test');

test("TC_1", async({ page })=>{

    test.setTimeout(150 * 1000);

    const url = env.BASE_URL;

    const username = env.USERNAME;

    const password = env.PASSWORD;

    await page.goto(url);

    await page.getByPlaceholder("Username").fill(username);

    await page.getByPlaceholder("Password").fill(password);

    await page.waitForTimeout(4000);

    await page.getByRole('button',{name : 'Login'}).click();

    await page.getByText("PIM").click();

    await page.getByText("Add Employee").click();

    await page.getByPlaceholder("First Name").fill("Anuj");
    

    await page.waitForTimeout(4000);


})