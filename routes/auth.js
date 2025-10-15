const router = require("express").Router();

router.post("/signup", (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `User ${username} signed up successfully` });
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `User ${username} logged in successfully` });
});

module.exports = router;
