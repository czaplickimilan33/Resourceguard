/**
 * Generuje ikony PNG dla PWA (manifest + apple-touch) z ikony SVG projektu.
 * Uruchomienie: node scripts/generate-icons.mjs
 */
import { chromium } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public", "icons");

const svg = await readFile(path.join(root, "app", "icon.svg"), "utf8");
const svgDataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

// maskable: ikona w strefie bezpiecznej (80% szerokości), tło pełne
const targets = [
  { file: "icon-192.png", size: 192, scale: 1 },
  { file: "icon-512.png", size: 512, scale: 1 },
  { file: "icon-maskable-512.png", size: 512, scale: 0.78, background: "#07111F" },
  { file: "apple-touch-icon.png", size: 180, scale: 1 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH ?? "/opt/pw-browsers/chromium",
});
const page = await browser.newPage();

for (const { file, size, scale, background } of targets) {
  const inner = Math.round(size * scale);
  const offset = Math.round((size - inner) / 2);
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<!doctype html><html><body style="margin:0;width:${size}px;height:${size}px;background:${background ?? "transparent"}">
    <img src="${svgDataUri}" style="position:absolute;left:${offset}px;top:${offset}px;width:${inner}px;height:${inner}px" />
  </body></html>`);
  const buffer = await page.screenshot({
    omitBackground: !background,
    clip: { x: 0, y: 0, width: size, height: size },
  });
  await writeFile(path.join(outDir, file), buffer);
  console.log(`✓ ${file} (${size}x${size})`);
}

await browser.close();
