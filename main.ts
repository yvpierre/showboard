import "$std/dotenv/load.ts";

// @ts-ignore
import { start } from "$fresh/server.ts";
// @ts-ignore
import manifest from "./fresh.gen.ts";
// @ts-ignore
import config from "./fresh.config.ts";

// @ts-ignore
await start(manifest, config);
