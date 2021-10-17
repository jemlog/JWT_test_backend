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
exports.getCloth = exports.createCloth = void 0;
const cloth_1 = __importDefault(require("../models/cloth"));
function createCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { top_bottom, short_long, color } = req.body;
        try {
            const cloth = yield cloth_1.default.create({ top_bottom, short_long, color });
            console.log(top_bottom, short_long, color);
            res.status(201).json({ code: 201, message: cloth });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createCloth = createCloth;
function getCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cloth = yield cloth_1.default.findAll({});
            res.status(200).json({ code: 200, cloth });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getCloth = getCloth;
//# sourceMappingURL=cloth.js.map