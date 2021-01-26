"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(cookie_parser_1.default());
app.use(morgan_1.default('dev'));
app.use(helmet_1.default());
app.get('/', function (req, res) {
    res.status(200).json({
        message: "Welcome to the Typescript API"
    });
});
app.listen(8080);
