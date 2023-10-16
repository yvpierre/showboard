#!/usr/bin/env -S deno run -A --watch=static/,routes/
// @ts-ignore
import dev from "$fresh/dev.ts";
// @ts-ignore
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

// @ts-ignore
await dev(import.meta.url, "./main.ts", config);
