export default function middleware(req, ev) {
    console.log('Edit and run at the edge!')
    return new Response({
        ip: req.ip,
        geo: req.geo,
        ua: req.ua
    })
}
