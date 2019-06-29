let games = []

module.exports = {
    add: (game) => {
        return games.push(game);
    },
    remove: () => {
        games = []
    },
    list: () => {
        return games;
    }
}