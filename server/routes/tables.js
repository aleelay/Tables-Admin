const express = require('express');
const tableRouter = express.Router();
const Table = require('../models/table');

tableRouter.get('/', async(req, res) => {
  try{
    const tables = await Table.find();
    res.json(tables);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while retrieving all records : ' + JSON.stringify(e, undefined, 2));
  }
});

tableRouter.get('/active', async(req, res) => {
  try{
    const tables = await Table.find({ active: 'true'});
    res.json(tables);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while retrieving active records : ' + JSON.stringify(e, undefined, 2));
  }
});

tableRouter.get('/inactive', async(req, res) => {
  try{
    const tables = await Table.find({ active: 'false'});
    res.json(tables);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while retrieving active records : ' + JSON.stringify(e, undefined, 2));
  }
});

tableRouter.get('/:id', async(req, res) => {
  try{
    const table = await Table.findById(req.params.id);
    res.json(table);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while searching a record : ' + JSON.stringify(e, undefined, 2));
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
      console.log('Error while creating new record : ' + JSON.stringify(e, undefined, 2));
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
    console.log('Error while updating a record : ' + JSON.stringify(e, undefined, 2));
  }
});

tableRouter.delete('/:id', async(req, res) => {
  try{
    const table = await Table.findById(req.params.id)
    const a1 = await table.remove()
    res.json(a1)
  }catch(e){
    res.send('Error patch')
    console.log('Error while deleting a record : ' + JSON.stringify(e, undefined, 2));
  }
});

module.exports = tableRouter;