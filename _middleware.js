export default function middleware(req, ev) {
    console.log(JSON.stringify(req))
    console.log(JSON.stringify(ev))
    return ev || Response
}
