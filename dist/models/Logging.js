"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Logging = /** @class */ (function () {
    function Logging(metric, value) {
        this.id = uuidv4_1.uuid();
        this.metric = metric;
        this.value = value;
        var created_at = new Date().toISOString();
        this.created_at = created_at;
    }
    return Logging;
}());
exports.default = Logging;
