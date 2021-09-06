const fs = require('fs');
const images = {
    "domains": [
        "vercel-git-image-optimisation-ponomarevlad.vercel.app",
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
const dir = '.vercel_build_output/config';
fs.mkdir(dir, {recursive: true}, (err) => {
    if (err) throw err;
    fs.writeFile(dir + '/images.json', JSON.stringify(images), (err) => {
        if (err) throw err;
        console.log('Images configuration file created successfully!');
    });
});
