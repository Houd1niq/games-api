"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
const restoreQueryString_1 = require("./helpers/restoreQueryString");
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT;
app.get("/games", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = (0, restoreQueryString_1.restoreQueryString)(req.query);
    let address = "https://www.freetogame.com/api/games";
    if (req.query.tag) {
        address = "https://www.freetogame.com/api/filter";
    }
    console.log(queryString, "queryString", address);
    const response = yield (0, axios_1.default)(address + queryString, {
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
        },
    });
    console.log(response);
    res.send(response.data);
}));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("hello world");
}));
app.get("/game/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield (0, axios_1.default)(` https://www.freetogame.com/api/game?id=${id}`, {
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
        },
    });
    res.send(response.data);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
