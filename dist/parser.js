"use strict";
exports.__esModule = true;
exports.parse = void 0;
var lexer = require("./lexer");
function parseTokens(tokens) {
    return null; //todo
}
function parse(code) {
    return parseTokens(lexer.tokenise(code));
}
exports.parse = parse;
