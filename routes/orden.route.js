const express = require('express')
const router = express.Router()
const Orden = require('../models/orden')


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
    const ordenes = await Orden.find();
    console.log(ordenes)
   // res.send("Primera página")
    res.json(ordenes)
})

router.post('/', async (req, res) => {
    const { titulo, descripcion }   
         = req.body
    const orden = new Orden({titulo, descripcion})
    await orden.save()
    console.log(orden)
   // res.send("Primera página")
    res.json({status: 'Tarea guardada'})
})

router.put('/:id', async (req, res) => {
  const { titulo, descripcion } 
         = req.body
    const newOrden = {titulo, descripcion}
    await Orden.findByIdAndUpdate(req.params.id, newOrden)
    // res.send("Primera página")
    res.json({status: 'Tarea actualizada'} )
})

router.delete('/:id', async (req, res) => {
   await Orden.findByIdAndRemove(req.params.id)
    // res.send("Primera página")
    res.json({status: 'Tarea borrada'} )
})

router.get('/:id', async (req, res) => {
    const orden= await Orden.findById(req.params.id)
     // res.send("Primera página")
     res.json(orden)
 })

module.exports = router;