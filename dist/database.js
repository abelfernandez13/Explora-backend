"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
"mongoose";
async function startConnection() {
    await (0, mongoose_1.connect)('mongodb://localhost:27017/mystore');
    console.log("datbase connection");
}
exports.startConnection = startConnection;
exports.default = startConnection();
