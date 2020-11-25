import func from "./import"

export default async (req, res) => {
    let test = func();
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        test,
        test2: func()
    })
}