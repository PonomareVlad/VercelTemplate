export default function middleware(req, ev) {
    const data = {ip: req.ip, geo: req.geo, ua: req.ua}
    console.dir(data)
    return new Response(JSON.stringify(data))
}
