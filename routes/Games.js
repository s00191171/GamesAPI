const express = require('express');
const router = express.Router();
const mongoose  = require('mongoose');

const { Game} = require('../models/games');
router.use(express.json())

router.get('/', async (req, res) => {

    try {
        const games = await Game.find().lean();
        res.json(games);
    }
    catch {
        res.status(500).json('db error')
    }
})

//by id

router.get('/:id', async (req, res) => {
    let id = req.params.id;
  
    try {

        const game = await Game.find(({_id:id})).lean();
        console.log(game)
        if (game) {
            res.json(game);
          }
          else {
            res.status(404).json('Not found');
        }
    
        
    }
    catch {
        res.status(500).json('db error')
    }
})


router.post('/', async (req, res) => {

    let game = new Game(req.body);

    try {

        game = await game.save();
        res
        .location(`/${game._id}`)
        .status(201)
        .json(game);
    }
    catch (error) {
      res.status(500).json('db_error ' + error);
    }

  });




  router.delete('/:id', async (req, res) => {
    try {
      const game = await Game.findByIdAndRemove(req.params.id);
      if (game)
        res.status(204).send();
      else
        res.status(404).json(`book with that ID ${req.params.id} was not found`)
    }
    catch {
      res.status(404).json(`funny id ${req.params.id} was not found`);
    }
  
  })
  
  

  module.exports = router;