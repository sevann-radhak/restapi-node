const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const message = { message: "You must consume de POST service" };
    res.json(message);
})

module.exports = router;