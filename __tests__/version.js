const puppeteer = require("puppeteer");
const { setup, teardown } = require("jest-dev-server");

let browser;
let page;
let server;

describe("import.meta.env contains PACKAGE_VERSION", () => {
  describe("in demo-cjs development", () => {
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: "new" });
      page = await browser.newPage();

      server = await setup({
        command: "VITE_CJS_IGNORE_WARNING=true npm run dev -w demo-cjs -- --port 3000",
        port: 3000,
      });
    });

    afterAll(async () => {
      await browser.close();
      await teardown(server);
    });

    test("", async () => {
      await page.goto("http://localhost:3000");

      const element = await page.$("#PACKAGE_VERSION");
      const version = await element.evaluate((el) => el.textContent);

      expect(version).toBe("0.0.0");
    });
  });

  describe("in demo-cjs production", () => {
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: "new" });
      page = await browser.newPage();

      server = await setup({
        command:
          "VITE_CJS_IGNORE_WARNING=true npm run prod -w demo-cjs -- --port 3001",
        port: 3001,
      });
    });

    afterAll(async () => {
      await browser.close();
      await teardown(server);
    });

    test("", async () => {
      await page.goto("http://localhost:3001");

      const element = await page.$("#PACKAGE_VERSION");
      const version = await element.evaluate((el) => el.textContent);

      expect(version).toBe("0.0.0");
    });
  });

  describe("in demo-esm development", () => {
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: "new" });
      page = await browser.newPage();

      server = await setup({
        command: "npm run dev -w demo-esm -- --port 3002",
        port: 3002,
      });
    });

    afterAll(async () => {
      await browser.close();
      await teardown(server);
    });

    test("", async () => {
      await page.goto("http://localhost:3002");

      const element = await page.$("#PACKAGE_VERSION");
      const version = await element.evaluate((el) => el.textContent);

      expect(version).toBe("0.0.0");
    });
  });

  describe("in demo-esm production", () => {
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: "new" });
      page = await browser.newPage();

      server = await setup({
        command:
          "npm run prod -w demo-esm -- --port 3003",
        port: 3003,
      });
    });

    afterAll(async () => {
      await browser.close();
      await teardown(server);
    });

    test("", async () => {
      await page.goto("http://localhost:3003");

      const element = await page.$("#PACKAGE_VERSION");
      const version = await element.evaluate((el) => el.textContent);

      expect(version).toBe("0.0.0");
    });
  });
});
