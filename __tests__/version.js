const puppeteer = require('puppeteer');
const { setup, teardown } = require('jest-dev-server');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();

  return setup([
    {
      command: 'npm run demo:dev',
      port: 3000,
    },
    {
      command: 'npm run demo:prod',
      port: 3001,
    },
  ]);
});

afterAll(async () => {
  browser.close();

  await teardown();
});

describe('import.meta.env contains PACKAGE_VERSION', () => {
  test('in development', async () => {
    await page.goto('http://localhost:3000/');

    const element = await page.$('#PACKAGE_VERSION');
    const version = await element.evaluate((el) => el.textContent);

    expect(version).toBe('0.0.0');
  });

  test('in production', async () => {
    await page.goto('http://localhost:3001/');

    const element = await page.$('#PACKAGE_VERSION');
    const version = await element.evaluate((el) => el.textContent);

    expect(version).toBe('0.0.0');
  });
});
