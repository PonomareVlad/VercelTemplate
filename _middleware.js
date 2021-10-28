export default function middleware(req, ev) {
    console.log(JSON.stringify(req, null, 4))
    return new Response()
}
