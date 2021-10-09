"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./router/auth"));
const index_1 = __importDefault(require("./router/index"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({ origin: true }));
app.use('/token', auth_1.default);
app.use('/', index_1.default);
app.use((req, res, next) => {
    next(new Error('invalid uri'));
});
const errorHandler = (err, req, res, next) => { };
app.use(errorHandler);
app.listen(3001, () => {
    console.log('server start...');
});
//# sourceMappingURL=app.js.map