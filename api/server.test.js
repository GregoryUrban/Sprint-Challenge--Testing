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

    describe('get /games', () => {

        afterEach(async () => {
            data.remove();
        });

        it('200 response', async () => {
            data.add({
                title: 'QBert',
                genre: 'Arcade',
                releaseYear: 1980
            });
            const res = await supertest(server).get(GET_GAMES);
            expect(res.status).toBe(200);
        });

        it('Json response', async () => {
            data.add({
                title: 'QBert',
                genre: 'Arcade',
                releaseYear: 1980
            });
            const res = await supertest(server).get(GET_GAMES);
            expect(res.type).toBe('application/json')
        });

        it('Array of games response', async () => {
            data.add({
                title: 'Pacman',
                genre: 'Arcade',
                releaseYear: 1980
            });
            data.add({
                title: 'MULE',
                genre: 'Arcade',
                releaseYear: 1983
            });
            data.add({
                title: 'DOOM',
                genre: 'Role-PLayer',
                releaseYear: 1987
            });
            const res = await supertest(server).get(GET_GAMES);
            expect(res.body).toEqual([
                {
                    title: 'Pacman',
                    genre: 'Arcade',
                    releaseYear: 1980
                },
                {
                    title: 'MULE',
                    genre: 'Arcade',
                    releaseYear: 1983
                },
                {
                    title: 'DOOM',
                    genre: 'Role-PLayer',
                    releaseYear: 1987
                }
            ]);
        });
  
        it('Empty array response', async () => {
            const res = await supertest(server).get(GET_GAMES);
            expect(res.body).toEqual([]);
        });
       
    })





})
