import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const baseUrl = "http://100.124.154.3:6007/experiments/specific_entity_birth_plan_support_v04/188000";
const destination = new URL("../public/data/generalizable-card-game-ai/", import.meta.url);

const decode = (value = "") => value
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&quot;/g, "\"")
  .replace(/&#39;/g, "'")
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));

const text = (html) => decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const one = (html, pattern) => html.match(pattern)?.[1] ?? "";
const all = (html, pattern) => [...html.matchAll(pattern)].map((match) => match[1]);

function parseCard(cardHtml) {
  return {
    title: text(one(cardHtml, /<div class="card-title">([\s\S]*?)<\/div>/)),
    route: text(one(cardHtml, /<div class="card-route">([\s\S]*?)<\/div>/)) || null,
    stats: all(one(cardHtml, /<div class="card-stats">([\s\S]*?)<\/div>/), /<span>([\s\S]*?)<\/span>/g).map(text),
    tags: all(one(cardHtml, /<div class="tags">([\s\S]*?)<\/div>/), /<span>([\s\S]*?)<\/span>/g).map(text)
  };
}

function parseState(stateHtml) {
  const zones = all(stateHtml, /<details class="zone[^>]*>([\s\S]*?)<\/details>/g).map((zoneHtml) => {
    const summary = one(zoneHtml, /<summary>([\s\S]*?)<\/summary>/);
    return {
      name: text(one(summary, /<span>([\s\S]*?)<\/span>/)),
      count: text(one(summary, /<small>([\s\S]*?)<\/small>/)),
      cards: all(zoneHtml, /<article class="card[^>]*>([\s\S]*?)<\/article>/g).map(parseCard)
    };
  });
  return {
    title: text(one(stateHtml, /<header class="state-heading">[\s\S]*?<h2>([\s\S]*?)<\/h2>/)),
    opponentLife: text(one(stateHtml, /<div class="life-bar opponent">[\s\S]*?<strong>([\s\S]*?)<\/strong>/)),
    selfLife: text(one(stateHtml, /<div class="life-bar self">[\s\S]*?<strong>([\s\S]*?)<\/strong>/)),
    zones
  };
}

function parseGameStates(html) {
  return all(html, /<section class="game-state[^>]*>([\s\S]*?)<\/section>/g).map(parseState);
}

async function getHtml(path) {
  const response = await fetch(`${baseUrl}/${path}`);
  if (!response.ok) throw new Error(`Unable to fetch ${path}: ${response.status}`);
  return response.text();
}

function readEmbeddedJson(html, id) {
  const value = one(html, new RegExp(`<script id="${id}" type="application/json">([\\s\\S]*?)<\\/script>`));
  if (!value) throw new Error(`Missing embedded JSON #${id}`);
  return JSON.parse(value);
}

await mkdir(destination, { recursive: true });
const [planHtml, spaceHtml] = await Promise.all([
  getHtml("transition-plan"),
  getHtml("transition-space")
]);

await Promise.all([
  writeFile(join(destination.pathname, "transition-plan.json"), `${JSON.stringify(readEmbeddedJson(planHtml, "transition-plan-points-data"))}\n`),
  writeFile(join(destination.pathname, "transition-space.json"), `${JSON.stringify(readEmbeddedJson(spaceHtml, "transition-points-data"))}\n`)
]);

const reconstructionPages = await Promise.all(
  Array.from({ length: 20 }, (_, index) => String(index).padStart(3, "0"))
    .map(async (sampleId) => ({ sampleId, html: await getHtml(`reconstruction/${sampleId}?encoder=prior`) }))
);
const stateExport = {
  source: {
    experiment: "specific_entity_birth_plan_support_v04",
    step: 188000,
    encoder: "prior",
    viewer: `${baseUrl}/reconstruction`
  },
  samples: reconstructionPages.map(({ sampleId, html }) => ({ sampleId, states: parseGameStates(html) }))
};
await writeFile(join(destination.pathname, "reconstruction-states.json"), `${JSON.stringify(stateExport)}\n`);

console.log(`Exported ${stateExport.samples.length} reconstruction samples and 1,000 points for each PCA view to ${destination.pathname}`);
