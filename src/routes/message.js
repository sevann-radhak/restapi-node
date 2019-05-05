const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send("You must consume de POST service");
})

router.post('/', (req, res) => {
    const { message } = req.body;

    if(message){
        res.send(200, message);
    }
    else{
        res.send("Wrong Request. Put a value for message item")
    }
})

module.exports = router;