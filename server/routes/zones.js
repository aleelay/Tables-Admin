const express = require('express');
const zoneRouter = express.Router();
const Zone = require('../models/zone');

zoneRouter.get('/', async(req, res) => {
  try{
    const zones = await Zone.find();
    res.json(zones);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while retrieving all records : ' + JSON.stringify(e, undefined, 2));
  }
});

zoneRouter.get('/grouped', async(req, res) => {
  try{
    const zones = await Zone.find({}).select('name -_id');
    res.json(zones);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while retrieving zones : ' + JSON.stringify(e, undefined, 2));
  }
});

zoneRouter.get('/:id', async(req, res) => {
  try{
    const zone = await Zone.findById(req.params.id);
    res.json(zone);
  }catch(e){
    res.send('Error: ' + e);
    console.log('Error while searching a record : ' + JSON.stringify(e, undefined, 2));
  }
});

zoneRouter.post('/', async(req,res) => {
  const zone = new Zone({
      name: req.body.name,
      color: req.body.color
    })

  try{
      const a1 =  await zone.save() 
      res.json(a1)
  }catch(e){
      res.send('Error post: '+ e)
      console.log('Error while creating new record : ' + JSON.stringify(e, undefined, 2));
  }
})

zoneRouter.post('/edit/:id', async(req, res) => {
  try{
    const zone = await Zone.findById(req.params.id)
    zone.name = req.body.name
    zone.color = req.body.color
    const a1 = await zone.save()
    res.json(a1)
  }catch(e){
    res.send('Error edit: '+ e)
    console.log('Error while updating a record : ' + JSON.stringify(e, undefined, 2));
  }
});

zoneRouter.delete('/:id', async(req, res) => {
  try{
    const zone = await Zone.findById(req.params.id)
    const a1 = await zone.remove()
    res.json(a1)
  }catch(e){
    res.send('Error patch')
    console.log('Error while deleting a record : ' + JSON.stringify(e, undefined, 2));
  }
});


module.exports = zoneRouter;