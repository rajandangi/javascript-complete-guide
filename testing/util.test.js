const puppeteer = require('puppeteer');

//https://jestjs.io/docs/getting-started
// Unit Testing
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
    //Basia Morris (48 years old)
    const text2 = generateText('Basia Morris', 48);
    expect(text2).toBe('Basia Morris (48 years old)');
});

test('should output data-less test', () => {
    const testText = generateText('', null);
    expect(testText).toBe(' (null years old)');
})

// Integration Testing
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

// End-to-End Testing
test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // slowMo: 80,
        // args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.click('input#name');
    await page.type('input#name', 'Rajan');
    await page.click('input#age');
    await page.type('input#age', '25');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Rajan (25 years old)');
}, 15000);