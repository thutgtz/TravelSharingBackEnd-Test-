const router = require('express').Router();
const User = require('../model/User');

router.post('/isreg',async (req,res)=> {
    console.log(req.body.id);
        await User.findOne({ id: req.body.id }, function(err, result) {
            if (err) {
              res.status(400).send(err);
            } else {
                if(result == null){
                    res.status(404).send("Not found");
                }else{
                    res.send(result);
                }
            }
          });
});

router.get('/test',async (req,res)=> {
    res.send("aaaaaa");
});

router.post('/register',async (req,res)=> {
    const user = new User({
        id: req.body.id,
        email: req.body.email,
        name : req.body.name,
    });
    console.log(req.body.email);
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;