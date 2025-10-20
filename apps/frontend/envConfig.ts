import { loadEnvConfig } from "@next/env";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const projectDir = process.cwd();
const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)
console.log("SERVER ENV ", join(projectDir, '..', '..'));
loadEnvConfig(join(projectDir, '..', '..'), false, {
    info: (msg: string) => console.log(msg),
    error: (msg: string) => console.error(msg),
}, true);
