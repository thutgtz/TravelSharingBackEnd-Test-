const router = require('express').Router();
const InviteRoutes = require('../model/InviteRoutes');
const JoinRoutes = require('../model/JoinRoutes');
const User = require('../model/User');

router.post('/SaveRoutes',async (req,res)=> {
    var routes ;
    console.log(req.body.role);
    try{
        if(req.body.role == 0){
            routes = new InviteRoutes({
                id: req.body.id,
                src: req.body.src,
                dst: req.body.dst,
                routes:req.body.routes,
                amount:req.body.amount,
                date:req.body.date
            });
            const user = await User.findOneAndUpdate({id: req.body.id}, {$push: {"event.invite": routes}});
        }else{
            routes = new JoinRoutes({
                id: req.body.id,
                src: req.body.src,
                dst: req.body.dst,
                routes:req.body.routes,
                amount:req.body.amount,
                date:req.body.date
            });
            const user = await User.findOneAndUpdate({id: req.body.id}, {$push: {"event.join": routes}});
        }
        // const eee = await user.save();
        const savedRoutes = await routes.save();
        res.send(savedRoutes);
    }catch(err){
        res.status(400).send(err);
    }
});

    router.post('/getRoutes',async (req,res)=> {
        var routes ;
        console.log(req.body.role);
        try{
            if(req.body.role == 0){
                await User.findOne({ id: req.body.id }).select('event.invite').exec(function(err, result) {
                    if (err) {
                      res.status(400).send(err);
                    } else {
                        if(Object.keys(result.event.invite).length === 0){
                            console.log("5555");
                            res.status(404).send("Not found");
                        }else{
                            res.send(result);
                        }
                    }
                  });
            }else{
                await User.findOne({ id: req.body.id }).select('event.join').exec(function(err, result) {
                    if (err) {
                      res.status(400).send(err);
                    } else {
                        if(Object.keys(result.event.join).length === 0){
                            res.status(404).send("Not found");
                        }else{
                            res.send(result);
                        }
                    }
                  });
            }
        }catch(err){
            res.status(400).send(err);
        }
    });

module.exports = router;