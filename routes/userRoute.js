const express = require('express')

const router = express.Router()
const User = require('../models/user')


// router.get('/', (req, res) => {
//     Task.find(function(err,tasks){
//         console.log(tasks)
//     })
//    // res.send("Primera página")
//     res.json({
//         status:'API trabajando!'
//     })
// })


router.get('/', async (req, res) => {
    const users = await User.find();
    console.log(users)
   // res.send("Primera página")
    res.json(users)
})

router.post('/', async (req, res) => {
    
    const { name, username, email,  password }   
         = req.body
    // const saltRounds = 10
    // const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({ name, username, email, password})
    await user.save()
    console.log(user)
   // res.send("Primera página")
    res.json({status: 'Tarea guardada'})
})

router.put('/:id', async (req, res) => {
    const { name, username, email, password }   
         = req.body
    // const saltRounds = 10
    // const passwordHash = await bcrypt.hash(password, saltRounds)
    const newUser = { name, username, email,  password}
    await User.findByIdAndUpdate(req.params.id, newUser)
    // res.send("Primera página")
    res.json({status: 'Tarea actualizada'} )
})

router.delete('/:id', async (req, res) => {
   await User.findByIdAndRemove(req.params.id)
    // res.send("Primera página")
    res.json({status: 'Tarea borrada'} )
})

router.get('/:id', async (req, res) => {
    const user= await User.findById(req.params.id)
     // res.send("Primera página")
     res.json(user)
 })

module.exports = router;