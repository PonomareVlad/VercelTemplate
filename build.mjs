import {mkdirSync, writeFileSync} from "fs"

const outputDir = new URL('./.vercel/output/', import.meta.url),
    configPath = new URL('./config.json', outputDir),
    staticDir = new URL('./static/', outputDir),
    test = new URL('./test.json', staticDir),
    config = {version: 3}

mkdirSync(outputDir, {recursive: true})
mkdirSync(staticDir, {recursive: true})
writeFileSync(configPath, JSON.stringify(config))
writeFileSync(test, JSON.stringify(config))

process.exit()
