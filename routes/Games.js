const express = require('express');
const router = express.Router();
const { Game} = require('../models/games');
const { route } = require('express/lib/application');

router.get('/Games', async (req, res) => {

    try {
        const games = await Game.find().lean();
        res.json(games);
    }
    catch {
        res.status(500).json('db error')
    }
})



router.post('/Games', async (req, res) => {

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
  module.exports = router;