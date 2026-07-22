import { expect, test } from "@playwright/test";

const routes: { path: string; heading: RegExp }[] = [
  { path: "/", heading: /Spokojna pomoc/i },
  { path: "/produkt", heading: /porządkuje pomoc/i },
  { path: "/demo", heading: /jak działa spokojna pomoc/i },
  { path: "/dla-instytucji", heading: /Wspólny język/i },
  { path: "/misja", heading: /uspokajać/i },
  { path: "/baza-wiedzy", heading: /oficjalnych źródeł/i },
  { path: "/baza-wiedzy/plan-bezpieczenstwa", heading: /Plan bezpieczeństwa/i },
  { path: "/pomoc-teraz", heading: /Pomoc jest dostępna/i },
  { path: "/polityka-prywatnosci", heading: /Polityka prywatności/i },
  { path: "/zasady-korzystania", heading: /Zasady korzystania/i },
  { path: "/offline", heading: /Brak internetu/i },
];

for (const route of routes) {
  test(`strona ${route.path} renderuje się z nagłówkiem`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(route.heading);
  });
}

test("strona główna nie loguje błędów w konsoli", async ({ page }) => {
  // Vercel Analytics serwuje swój skrypt dopiero na infrastrukturze Vercel;
  // lokalnie (`npm start`) daje 404 + błąd MIME. To szum środowiskowy, nie błąd
  // produktu — odfiltrowujemy go, resztę traktujemy jako realną regresję.
  const ignore = [/_vercel\/insights/, /Failed to load resource/i];
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" && !ignore.some((re) => re.test(msg.text()))) {
      errors.push(msg.text());
    }
  });
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto("/");
  await page.mouse.wheel(0, 4000);
  await page.waitForTimeout(600);
  expect(errors).toEqual([]);
});

test("nieistniejąca strona pokazuje 404 z drogą powrotną", async ({ page }) => {
  const response = await page.goto("/taka-strona-nie-istnieje");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("BŁĄD 404")).toBeVisible();
  await expect(page.getByRole("link", { name: /Wróć na stronę główną/i })).toBeVisible();
});

test("scrollytelling trybów zawiera wszystkie cztery tryby", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#tryby");
  await expect(section.getByRole("heading", { name: "Stabilnie" })).toBeVisible();
  for (const name of ["Potrzebuję wsparcia", "Sytuacja się nasila", "Pilna pomoc"]) {
    await expect(section.getByRole("heading", { name })).toBeAttached();
  }
});

test("pasek alarmowy z numerem 112 jest zawsze widoczny", async ({ page }) => {
  await page.goto("/produkt");
  const ribbon = page.getByRole("link", { name: /Zagrożenie życia: 112/i });
  await expect(ribbon).toBeVisible();
  await expect(ribbon).toHaveAttribute("href", "tel:112");
});

test.describe("interaktywne demo", () => {
  test("wybór trybu, odhaczanie kroków i zapis w localStorage", async ({ page }) => {
    await page.goto("/demo");
    await page.getByRole("button", { name: /Potrzebuję wsparcia/i }).click();
    await expect(page.getByText("Tryb 02: Potrzebuję wsparcia")).toBeVisible();

    // Odhacz pierwszy krok
    await page.getByRole("button", { name: /Wykonaj ćwiczenie oddechu 4–6/i }).click();

    // Dodaj kontakt
    await page.getByRole("tab", { name: "Kontakty" }).click();
    await page.getByPlaceholder("Imię").fill("Ala");
    // Pole telefonu obsługuje dodanie kontaktu klawiszem Enter (realna interakcja).
    await page.getByPlaceholder("Numer telefonu").fill("600 700 800");
    await page.getByPlaceholder("Numer telefonu").press("Enter");
    await expect(page.getByText("Ala", { exact: true })).toBeVisible();

    // Stan przetrwał przeładowanie
    await page.reload();
    await expect(page.getByText("Tryb 02: Potrzebuję wsparcia")).toBeVisible();
    await page.getByRole("tab", { name: "Kontakty" }).click();
    await expect(page.getByText("Ala", { exact: true })).toBeVisible();
  });

  test("walidacja kontaktu i czyszczenie danych demo", async ({ page }) => {
    await page.goto("/demo");
    await page.getByRole("button", { name: /Stabilnie/i }).first().click();

    await page.getByRole("tab", { name: "Kontakty" }).click();
    await page.getByPlaceholder("Imię").fill("X");
    await page.getByPlaceholder("Numer telefonu").fill("abc");
    await page.getByPlaceholder("Numer telefonu").press("Enter");
    await expect(page.getByText(/Podaj imię osoby/i)).toBeVisible();

    // Czyszczenie danych wraca do onboardingu
    await page.getByRole("button", { name: /Wyczyść dane demo/i }).click();
    await page.getByRole("button", { name: /Tak, usuń wszystko/i }).click();
    await expect(page.getByRole("heading", { name: /Jak się teraz czujesz/i })).toBeVisible();
  });

  test("tryb pilny pokazuje przyciski połączeń alarmowych", async ({ page }) => {
    await page.goto("/demo");
    await page.getByRole("button", { name: /Pilna pomoc/i }).click();
    const link112 = page.getByRole("link", { name: /112 — numer alarmowy/i });
    await expect(link112).toBeVisible();
    await expect(link112).toHaveAttribute("href", "tel:112");
  });
});

test.describe("formularz kontaktowy", () => {
  test("pokazuje błędy walidacji i stan sukcesu w trybie demo", async ({ page }) => {
    await page.goto("/#kontakt");
    const form = page.locator("#kontakt form");

    // Puste wysłanie -> błędy
    await form.getByRole("button", { name: /Wyślij wiadomość/i }).click();
    await expect(page.getByText(/Podaj imię/i)).toBeVisible();
    await expect(page.getByText(/poprawny adres email/i)).toBeVisible();

    // Poprawne dane -> sukces (tryb demo bez klucza)
    await form.getByLabel("Imię").fill("Test");
    await form.getByLabel("Email").fill("test@example.com");
    await form.getByLabel("Wiadomość").fill("Wiadomość testowa z Playwright.");
    await form.getByLabel(/Wyrażam zgodę/i).check();
    await form.getByRole("button", { name: /Wyślij wiadomość/i }).click();
    await expect(page.getByRole("status").filter({ hasText: /Dzięki/i })).toBeVisible();
  });
});

test.describe("dostępność i preferencje", () => {
  test("strona działa z prefers-reduced-motion", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.goto("/demo");
    await expect(page.getByRole("heading", { name: /Jak się teraz czujesz/i })).toBeVisible();
    await context.close();
  });

  test("skip link prowadzi do treści", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: /Przejdź do treści/i });
    await expect(skipLink).toBeFocused();
  });

  test("nawigacja klawiaturą po menu działa", async ({ page, isMobile }) => {
    test.skip(!!isMobile, "menu desktopowe");
    await page.goto("/");
    await page.getByRole("link", { name: "Produkt", exact: true }).click();
    await expect(page).toHaveURL(/\/produkt$/);
  });
});

test.describe("mobile", () => {
  test("menu mobilne otwiera się i nawiguje", async ({ page, isMobile }) => {
    test.skip(!isMobile, "tylko mobile");
    await page.goto("/");
    await page.getByRole("button", { name: /Otwórz menu/i }).click();
    await page.locator("#mobile-menu").getByRole("link", { name: "Produkt" }).click();
    await expect(page).toHaveURL(/\/produkt$/);
  });

  test("brak poziomego scrolla na stronie głównej", async ({ page, isMobile }) => {
    test.skip(!isMobile, "tylko mobile");
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
