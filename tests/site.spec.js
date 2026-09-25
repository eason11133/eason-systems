import { expect, test } from "@playwright/test";

const routes = ["/", "/products", "/products/lta", "/products/eot", "/story", "/about"];
const viewports = [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }];

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport });
    for (const route of routes) {
      test(`${route} renders without layout or console errors`, async ({ page }) => {
        const errors = [];
        page.on("console", message => message.type() === "error" && errors.push(message.text()));
        page.on("pageerror", error => errors.push(error.message));
        const response = await page.goto(route);
        expect(response?.ok()).toBeTruthy();
        await expect(page.locator("main")).toBeVisible();
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow).toBeLessThanOrEqual(1);
        expect(errors).toEqual([]);
        const slug = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
        await page.screenshot({ path: `test-results/${viewport.name}-${slug}.png`, fullPage: true });
      });
    }
  });
}

test("navigation, history, refresh, and mobile menu work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Products" })).toBeVisible();
  await page.getByRole("navigation").getByRole("link", { name: "Products" }).click();
  await expect(page).toHaveURL(/\/products$/);
  await page.getByRole("link", { name: /Your AI got the link/ }).click();
  await expect(page).toHaveURL(/\/products\/lta$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/products$/);
  await page.goForward();
  await expect(page).toHaveURL(/\/products\/lta$/);
  await page.reload();
  await expect(page.getByRole("heading", { name: /Your AI got the link/ })).toBeVisible();
});

test("all internal page links resolve", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute("href")))]);
    for (const href of hrefs) {
      const response = await page.request.get(href);
      expect(response.ok(), `${route} links to ${href}`).toBeTruthy();
    }
  }
});
