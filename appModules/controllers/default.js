const path = require("path");

const {mimeTypes, staticFile} = require("../http-utils");

async function defaultController(res, url) {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimeTypes) {
        staticFile(res, url, extname);
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}

module.exports = defaultController;