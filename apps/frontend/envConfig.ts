import { loadEnvConfig } from "@next/env";
import { join } from "path";
import { fileURLToPath } from "url";

const projectDir = process.cwd();
const __filename = fileURLToPath(import.meta.url)

console.log("SERVER ENV ", join(projectDir, '..', '..'));
loadEnvConfig(join(projectDir, '..', '..'), true, {
    info: (msg: string) => console.log(msg),
    error: (msg: string) => console.error(msg),
}, true);
