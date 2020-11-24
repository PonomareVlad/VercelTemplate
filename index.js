import test from "./import.mjs"

export default async (req, res) => {
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        import: test
    })
}