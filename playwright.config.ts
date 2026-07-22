import { defineConfig, devices } from "@playwright/test";

/**
 * Testy e2e działają na buildzie produkcyjnym: `npm run build && npm run test:e2e`.
 * Zmienna CHROMIUM_PATH pozwala użyć systemowego Chromium zamiast pobranego
 * przez Playwright (przydatne w CI i środowiskach sandboxowych).
 */

const launchOptions = process.env.CHROMIUM_PATH
  ? { executablePath: process.env.CHROMIUM_PATH }
  : {};

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3100",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run start -- -p 3100",
    url: "http://localhost:3100",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], launchOptions },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"], launchOptions },
    },
  ],
});
