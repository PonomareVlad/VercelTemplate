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
fs.writeFile('.vercel_build_output/config/images.json', JSON.stringify(images), (err) => {
    if (err) throw err;
    console.log('Images configuration file created successfully!');
});
