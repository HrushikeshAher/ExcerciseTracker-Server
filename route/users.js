const express = require("express")
const router = express.Router();
const user = require("../db/models/user")

router.route("/").get((req,res)=>{
    user.find().then((user)=>{
        res.status(200).send(user)
    }).catch((err)=>{
        res.status(400).send(`Error: ${err}`)
    })
})

router.route("/add").post((req,res)=>{
    const userrecord = new user(req.body);
    userrecord.save().then(()=>{
        res.status(201).send(`User added Successfully!!`)
    }).catch((err)=>{
        res.status(400).send(`Unable to save user Error: ${err}`)
    })
})

router.route("/delete/:id").delete((req,res)=>{
    const {id} = req.params
    user.findByIdAndDelete(id).then(()=>{
        res.status(200).send("User Deleted Successfully!!")
    }).catch((err)=>{
        res.status(400).send(`Error Deleting User. Error: ${err}`)
    })
})

module.exports = router;
