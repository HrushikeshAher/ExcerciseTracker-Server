const router = require("express").Router();
const excercise = require("../db/models/excercise")

router.route("/").get((req, res) => {
    excercise.find().then((excercise) => {
        res.status(200).send(excercise);
    }).catch((err) => {
        res.status(400).send(`Unable to Add excercise Error: ${err}`)
    })
})

router.route("/add").post((req, res) => {
    const excerciserecord = new excercise(req.body)
    excerciserecord.save().then(() => {
        res.status(201).send("Excercise added Successsfully!!")
    }).catch((err) => {
        res.status(400).send(`Unable to add excercise Error: ${err}`)
    })
})

router.route("/:id").get( (req, res) => {
    const { id } = req.params;
    excercise.findById(id).then(excercise => {
        if(!excercise)
        {
            res.status(400).send("Excercise Not found")            
        }
        else
        res.status(200).send(excercise)
    }).catch(err => {
        res.status(400).send(`Error pulling Excercise ERROR: ${err}`)
    })
})


router.route("/:id").delete( (req, res) => {
    const { id } = req.params;
    excercise.findByIdAndDelete(id).then(excercise => {
        if(!excercise)
        {
            res.status(400).send("Excercise Not found")            
        }
        else
        res.status(200).send("Excercise Deleted Successfuly!!")
    }).catch(err => {
        res.status(400).send(`Error Deleting Excercise ERROR: ${err}`)
    })
})

router.route("/update/:id").patch((req, res) => {
    const { id } = req.params;
    excercise.findByIdAndUpdate(id,req.body,{
        new:true
    }).then(excercise => {
        if(!excercise)
        {
            res.status(400).send("Excercise Not found")            
        }
        else
        res.status(200).send("Excercise Updated Successfully!!")
    }).catch(err => {
        res.status(400).send(`Error Deleting Excercise ERROR: ${err}`)
    })
})


router.route("/delete/:name").delete( (req, res) => {
    const { name } = req.params;
    excercise.deleteMany({username:name}).then(excercise => {
        if(!excercise)
        {
            res.status(400).send("Excercise Not found")            
        }
        else
        res.status(200).send("Excercise Deleted Successfuly!!")
    }).catch(err => {
        res.status(400).send(`Error Deleting Excercise ERROR: ${err}`)
    })
})



module.exports = router