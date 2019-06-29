const express = require('express');
const router = express.Router();
const data = ('../data.js');

const server = express();
server.use(express.json());

const GET_GAMES = '/games';
const POST_GAMES = '/games';

server.get('/', (req,res) => {
    res.status(200).json({ api: 'up' })
})


module.exports = server;