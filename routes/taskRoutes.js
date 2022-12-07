const express = require('express')
const router = express.Router()
const Task = require('../models/task')


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
    const tasks = await Task.find();    //Se agrego {userId:req.query.userId}
    console.log(tasks)
   // res.send("Primera página")
    res.json(tasks)
})

router.post('/', async (req, res) => {
    const { date, hora, ancho, largo, alto, peso, cityin, addressin, nameout, idout, cityout, addressout, stateorder}   
         = req.body
    const task = new Task({date, hora, ancho, largo, alto, peso, cityin, addressin, nameout, idout, cityout, addressout, stateorder})
    await task.save()
    console.log(task)
   // res.send("Primera página")
    res.json({status: 'Tarea guardada'})
})

router.put('/:id', async (req, res) => {
    const { date, hora, ancho, largo, alto, peso, cityin, addressin, nameout, idout, cityout, addressout, stateorder}   
         = req.body
    const newTask = {date, hora, ancho, largo, alto, peso, cityin, addressin, nameout, idout, cityout, addressout, stateorder}
    await Task.findByIdAndUpdate(req.params.id, newTask)
    // res.send("Primera página")
    res.json({status: 'Tarea actualizada'} )
})

router.delete('/:id', async (req, res) => {
   await Task.findByIdAndRemove(req.params.id)
    // res.send("Primera página")
    res.json({status: 'Tarea borrada'} )
})

router.get('/:id', async (req, res) => {
    const task= await Task.findById(req.params.id)
     // res.send("Primera página")
     res.json(task)
 })

module.exports = router;