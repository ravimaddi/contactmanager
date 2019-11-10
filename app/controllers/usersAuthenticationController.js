const User = require('../models/user')
const _ = require('lodash')

module.exports.register=(req,res)=>{
    const body= req.body
    const user = new User(body)
    user.save()
    .then((user)=>{
           res.json( _.pick(user,['_id','username','email']))

        // const {_id,username,email}=user
        // res.json({_id,username,email})
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.login=(req,res)=>{
    let user
    User.findByCredentials(req.body.email,req.body.password)
    .then((response)=>{
        user=response
       return user.generateToken()
    })
    .then((token)=>{
        res.json({user,token})
    })
    .catch((err)=>{
     res.json(err)
    })
    
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.account = (req,res) => {
    const {_id,username,email} = req.user
    res.json({_id,username,email})
}

module.exports.logout=(req,res)=>{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(()=>{
        res.json('Succesfully logged out')
    })
    .catch((err)=>{
        res.json(err)
    })
}
