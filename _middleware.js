export default function middleware(req, ev) {
    console.log(JSON.stringify(req))
    return ev || Response
}
