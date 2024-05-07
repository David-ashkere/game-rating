const {PATH_TO_RATING_FILE, WEIGHT} = require("./config");
const {makeRatingFile} = require("./rating-file");
const {createRating, updateRating} = require("./calculcations");

module.exports = {makeRatingFile, createRating, updateRating, PATH_TO_RATING_FILE, WEIGHT};