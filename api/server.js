const express = require('express');
const router = express.Router();
const data = require('../data');

const server = express();
server.use(express.json());

const GET_GAMES = '/games';
const POST_GAMES = '/games';

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get(GET_GAMES, (req, res) => {
  const games = data.list();
  res.status(200).json(games);
});

server.post(POST_GAMES, (req, res) => {
    const game = req.body;
    if (game.title && game.genre) {
      const id = data.add(game);
      res.status(201).json({id});
    } else {
      res.status(422).json({error: 'Missing title or genre'});
    }

});

module.exports = server;