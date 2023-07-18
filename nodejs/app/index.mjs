"use strict";

import { readFile, writeFile } from "fs/promises";

// it builds the absolute path to the template.html file and returns a string in utf-8 encoding
let template = await readFile(
  new URL("./template.html", import.meta.url),
  "utf-8"
);

const data = {
  title: "A file",
  body: "A body replacement.",
};

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val);
}

await writeFile(new URL("./index.html", import.meta.url), template);
