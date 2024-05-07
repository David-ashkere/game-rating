const http = require("http");
const {defaultController, gameRouteController, mainRouteController, voteRouteController} = require("./appModules/controllers");

const server = http.createServer((req, res) => {
    const url = req.url;
    res.statusCode = 200;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break;
        default:
            defaultController(res, url);
            break;
    }
});

server.listen(3000);