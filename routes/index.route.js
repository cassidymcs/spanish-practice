const express = require('express')
const User = require('../models/index.model')
const router = express.Router()


router.get('/users', (req, res ) => { //previously '/'
    User.find({}, (err,users)=> {  //users refers to db collection name? 
        res.json(users)
    })
})

router.post('/users', (req, res)=>{
    user = new User({
        name : req.body.name,
        email: req.body.email,
        password: req.body.name
    })
    user.save(()=> {
        res.json(user)
    })
    console.log('user created');
})

router.put('/users/:id', async(req, res) => {
   user = await User.findById(req.params.id)
        user.name=req.body.name;
        user.email=req.body.email;
        user.password=req.body.password;
        user.save(() =>{
            res.json(user)
        })
})

router.delete('/users/:id', async(req, res) => {
    User.findByIdAndDelete(req.params.id, (err) =>{
        res.json({'message': 'deleted'})
    })
})

module.exports = router
//maybe rename users.route instead of index since i edited the urls. 