const supertest = require('supertest');
const server = require('./server');
const data = require('../data.js')

const GET_GAMES = '/games';
const POST_GAMES = '/games';

describe('endpoints', () => {
    describe('get /', () => {
        it('200 response', async () => {
            const res = await supertest(server).get('/');
            expect(res.status).toBe(200)
        })
        it('Json response', async () => {
            const res = await supertest(server).get('/');
            expect(res.type).toBe('application/json')
        })
        it('API response', async () => {
            const res = await supertest(server).get('/');
            expect(res.body).toEqual({ api: 'up' })
        })
    })

    


})