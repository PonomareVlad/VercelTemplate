export default function middleware(req, ev) {
    const {url, geo} = req;
    // const data = {ip: req.ip, geo: req.geo, ua: req.ua};
    const country = geo.country || 'US'
    const city = geo.city || 'San Francisco'
    const region = geo.region || 'CA'
    url.searchParams.set('country', country)
    url.searchParams.set('city', city)
    url.searchParams.set('region', region)
    console.dir(req)
    return new Response.rewrite(url)
}
