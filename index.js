import func, {test} from "./import.mjs"

export default async (req, res) => {
    func();
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        test
    })
}