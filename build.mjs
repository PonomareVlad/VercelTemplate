import {mkdirSync, writeFileSync} from "fs"

const outputDir = new URL('./.vercel/output/', import.meta.url),
    configPath = new URL('./config.json', outputDir),
    staticDir = new URL('./static/', outputDir),
    test = new URL('./test.json', staticDir),
    config = {
        version: 3,
        images: {sizes: [128, 1024, 2048], formats: ["image/webp", "image/avif"], domains: ["cloudflare-ipfs.com"]}
    }

mkdirSync(outputDir, {recursive: true})
mkdirSync(staticDir, {recursive: true})
writeFileSync(configPath, JSON.stringify(config))
writeFileSync(test, JSON.stringify(config))

const result = {outputDir, configPath, staticDir, config, test}

console.debug('Build complete', JSON.stringify(result, null, 4))
process.exit()
