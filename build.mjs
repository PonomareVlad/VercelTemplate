import {dirname} from "path";
import {writeFileSync, mkdirSync} from 'fs';

const configPath = `.vercel/output/functions/api/index.prerender-config.json`;

const config = {
    "expiration": false,
    "bypassToken": process.env.BYPASS_TOKEN
}

console.debug(process.env);

mkdirSync(dirname(configPath), {recursive: true});
writeFileSync(configPath, JSON.stringify(config), {});
