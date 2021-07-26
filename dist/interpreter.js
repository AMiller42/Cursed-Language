"use strict";
exports.__esModule = true;
exports.interpret = void 0;
var parser_1 = require("./parser");
function interpret(code, flags) {
    if (flags === void 0) { flags = {}; }
    var ast = parser_1.parse(code);
    execAST(ast, flags);
}
exports.interpret = interpret;
function execAST(ast, flags) {
    if (flags === void 0) { flags = {}; }
}
