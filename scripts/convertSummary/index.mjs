import { promises as fs } from "fs";
import { parse } from "node-html-parser";

const FROM = "scripts/convertSummary/summary.html";
const TO = "scripts/convertSummary/summary.json";

const pages = [];
const reduce = (nodes, depth) => {
  for (const node of nodes) {
    if (node.nodeType === 1) {
      reduce(node.childNodes, depth + 1);
    } else if (node.nodeType === 3) {
      if (!/^\n\s*/.test(node._rawText)) {
        pages.push({
          depth: depth / 2 - 2,
          status: 0,
          title: node._rawText,
        });
      }
    }
  }
};

const main = async () => {
  const html = (await fs.readFile(FROM)).toString();
  const root = parse(html);

  reduce([root], 0);

  await fs.writeFile(TO, JSON.stringify(pages, null, 2), { encoding: "utf-8" });
};

main();
