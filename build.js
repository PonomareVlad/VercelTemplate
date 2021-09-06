const path = require("path");
const fs = require('fs');
const images = {
    "domains": [
        "ponomarev.studio"
    ],
    "sizes": [
        640,
        750,
        828,
        1080,
        1200,
        1920
    ]
}
const path = path.resolve(__dirname, './.vercel_build_output/config');
fs.mkdir(path, {recursive: true}, (err) => {
    if (err) throw err;
});
fs.writeFile(path + '/images.json', JSON.stringify(images), (err) => {
    if (err) throw err;
    console.log('Images configuration file created successfully!');
});
