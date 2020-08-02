const express = require('express');
const tableRouter = express.Router();
const Table = require('../models/table');

tableRouter.get('/', async(req, res) => {
  try{
    const tables = await Table.find();
    res.json(tables);
  }catch(e){
    res.send('Error: ' + err);
  }
});

tableRouter.get('/:id', async(req, res) => {
  try{
    const table = await Table.findById(req.params.id);
    res.json(table);
  }catch(e){
    res.send('Error: ' + err);
  }
});

tableRouter.post('/', async(req,res) => {
  const table = new Table({
      name: req.body.name,
      zone: req.body.zone,
      active: req.body.active
  })

  try{
      const a1 =  await table.save() 
      res.json(a1)
  }catch(e){
      res.send('Error post: '+ e)
  }
})

tableRouter.post('/edit/:id', async(req, res) => {
  try{
    const table = await Table.findById(req.params.id)
    table.active = req.body.active
    table.name = req.body.name
    table.zone = req.body.zone
    const a1 = await table.save()
    res.json(a1)
  }catch(e){
    res.send('Error edit: '+ e)
  }
});

tableRouter.delete('/:id', async(req, res) => {
  try{
    const table = await Table.findById(req.params.id)
    const a1 = await table.remove()
    res.json(a1)
  }catch(e){
    res.send('Error patch')
  }
});

module.exports = tableRouter;