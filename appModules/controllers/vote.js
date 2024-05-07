const parseBody = require("../http-utils/parseBody");
const { WEIGHT, createRating, updateRating, PATH_TO_RATING_FILE } = require("../rating");

async function voteRouteController(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 404;
        res.end("Not Found");
    } else try {
        const body = await parseBody(req);
        const data = JSON.parse(body);
        const rating = createRating(data, WEIGHT);


        const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
        const ratingArray = JSON.parse(ratingFile);
        const newRating = updateRating(ratingArray, data.id, rating);


        await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating));

        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
        
    } catch (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
    }
}

module.exports = voteRouteController;