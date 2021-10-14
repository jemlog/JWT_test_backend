"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./router/auth"));
const index_1 = __importDefault(require("./router/index"));
const cloth_1 = __importDefault(require("./router/cloth"));
const models_1 = require("./models");
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const app = express_1.default();
app.set('port', process.env.PORT || 3005);
if (process.env.NODE_ENV === 'production') {
    app.use(morgan_1.default('combined'));
    app.use(helmet_1.default({ contentSecurityPolicy: false }));
    app.use(hpp_1.default());
}
else {
    app.use(morgan_1.default('dev'));
}
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({ origin: true }));
// routing
app.use('/auth', auth_1.default);
app.use('/', index_1.default);
app.use('/cloth', cloth_1.default);
// db connect
models_1.sequelize.sync({ force: true }).then(() => {
    console.log('postgres connected!');
}).catch(error => {
    console.error(error);
});
app.use((req, res, next) => {
    next(new Error('invalid uri'));
});
const errorHandler = (err, req, res, next) => { };
app.use(errorHandler);
app.listen(app.get('port'), () => {
    console.log('server start...');
});
//# sourceMappingURL=app.js.map