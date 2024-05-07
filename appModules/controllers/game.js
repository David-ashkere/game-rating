const { getRandomGame } = require("../api");
const { PATH_TO_RATING_FILE } = require("../rating");

const fs = require("fs").promises;

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (err) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

module.exports = gameRouteController;