/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.execute = exports.linkify = void 0;\nvar interpreter = __webpack_require__(/*! ./interpreter */ \"./src/interpreter.ts\");\nconsole.log(\"Here!\");\n/******************************* BEGIN HELPERS *******************************/\nfunction getFlags() {\n    return [];\n}\nfunction getInputs() {\n    return [];\n}\nfunction getCode() {\n    return document.getElementById(\"codebox\").innerText;\n}\n//From https://stackoverflow.com/a/35385518\nfunction htmlToElement(html) {\n    var template = document.createElement(\"template\");\n    html = html.trim(); // Never return a text node of whitespace as the result\n    template.innerHTML = html;\n    return template.content.firstChild;\n}\n/******************************** END HELPERS ********************************/\nfunction linkify() {\n    var flags = getFlags().join(\" \");\n    var input = getInputs().join(\"\\n\");\n    var code = getCode();\n    var site = window.location.origin + window.location.pathname;\n    var encodedFlags = \"flags=\" + encodeURIComponent(flags);\n    var encodedInput = \"input=\" + encodeURIComponent(input);\n    var encodedCode = \"code=\" + encodeURIComponent(code);\n    var link = site + \"?\" + encodedFlags + \"&\" + encodedInput + \"&\" + encodedCode;\n    alert(link);\n}\nexports.linkify = linkify;\nfunction execute() {\n    var flags = getFlags();\n    var inputs = getInputs();\n    var code = getCode();\n    var res = interpreter.interpret(code, inputs, flags);\n    alert(res);\n}\nexports.execute = execute;\nfunction popupJohnvertise() {\n    var screenWidth = window.innerWidth;\n    var screenHeight = window.innerHeight;\n    console.log(screenHeight, screenWidth);\n    // set size of the popup with a random multiplier\n    var adSize = 1.25 - Math.random();\n    var adWidth = Math.round(732 * adSize);\n    var adHeight = Math.round(94 * adSize);\n    // set a random position for the ad\n    var offsetX = \"\" + Math.floor(Math.random() * (screenWidth - adWidth));\n    var offsetY = Math.floor(Math.random() * (screenHeight - adHeight));\n    // if the ad is wider than the screen, get rid of the x offset\n    offsetX = adWidth >= screenWidth ? \"\" : \"right:\" + offsetX + \"px;\";\n    // spawn the ad\n    var x = \"<img src=\\\"./img/x.gif\\\" style=\\\"height: 12px; width: 12px; cursor:grab;\\\" onclick=\\\"this.parentElement.remove();\\\"/>\";\n    var advert = \"<iframe src=\\\"https://john.mondecitronne.com/embed?ref=http://amiller42.github.io/Cursed-Language\\\"\\n        style=\\\"margin-left:auto; display:block; max-width:\" + adWidth + \"px; width:100%; height:\" + adHeight + \"px; border:none;\\\"\\n    ></iframe>\";\n    var html = \"<div style=\\\"position:fixed; top:\" + offsetY + \"px; \" + offsetX + \" height:\" + adHeight + \"px; width:\" + adWidth + \"px;\\\" id=\\\"popup\\\">\\n            \" + x + advert + \"\\n        </div>\";\n    document.body.appendChild(htmlToElement(html));\n    // wait anywhere from 15-90 seconds to spawn another popup\n    setTimeout(popupJohnvertise, Math.floor(Math.random() * 75000 + 15000));\n}\n// wait anywhere from 2-10 seconds before the first popup\nsetTimeout(popupJohnvertise, Math.floor(Math.random() * 8000 + 2000));\n//Set event listeners here because the functions can't be accessed from\n//the HTML directly for some reason.\n//TODO figure out a way to get around that ^\nwindow.addEventListener(\"DOMContentLoaded\", function (event) {\n    document.getElementById(\"run\").onclick = execute;\n    document.getElementById(\"link\").onclick = linkify;\n});\n\n\n//# sourceURL=webpack://cursed-language/./src/index.ts?");

/***/ }),

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.interpret = void 0;\nvar parser_1 = __webpack_require__(/*! ./parser */ \"./src/parser.ts\");\nfunction interpret(code, inputs, flags) {\n    if (inputs === void 0) { inputs = []; }\n    if (flags === void 0) { flags = []; }\n    var ast = parser_1.parse(code);\n    execAST(ast, inputs, flags);\n}\nexports.interpret = interpret;\nfunction execAST(ast, inputs, flags) { }\n\n\n//# sourceURL=webpack://cursed-language/./src/interpreter.ts?");

/***/ }),

/***/ "./src/lexer.ts":
/*!**********************!*\
  !*** ./src/lexer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*\nFile: lexer.ts\nThis wretched file takes the accursed source code and transforms it\ninto a list of assuredly horrid tokens, ripe for the parsing.\n*/\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tokenise = exports.Token = void 0;\n/*\n Token types include:\n   STRING\n      Strings, e.g. ''Hello''\n   NUMBER\n      Numbers, e.g. 123, 456.789\n   VAR_SET\n      Variable assignment, i.e. \"<-\" or \"->\"\n   LABEL\n      Labels, e.g. :label:\n   DESTINATION\n      A label destination, e.g. ;label;\n   WORD\n      Letter groups, typically keywords, e.g. \"During\", \"Compare\"\n   INDENT\n      A newline followed by spaces, e.g. \"\\n​​​​\"\n      To be used for structure branching, similar to \"|\"\n   GENERAL\n      Everything else, e.g. \"}\", \"|\", \"+\"\n*/\nvar TokenType;\n(function (TokenType) {\n    TokenType[TokenType[\"STRING\"] = 0] = \"STRING\";\n    TokenType[TokenType[\"NUMBER\"] = 1] = \"NUMBER\";\n    TokenType[TokenType[\"VAR_SET\"] = 2] = \"VAR_SET\";\n    TokenType[TokenType[\"LABEL\"] = 3] = \"LABEL\";\n    TokenType[TokenType[\"DESTINATION\"] = 4] = \"DESTINATION\";\n    TokenType[TokenType[\"WORD\"] = 5] = \"WORD\";\n    TokenType[TokenType[\"INDENT\"] = 6] = \"INDENT\";\n    TokenType[TokenType[\"GENERAL\"] = 7] = \"GENERAL\";\n    TokenType[\"RPAREN\"] = \")\";\n    TokenType[\"LPAREN\"] = \"(\";\n    TokenType[\"RSQUARE\"] = \"]\";\n    TokenType[\"LSQUARE\"] = \"[\";\n    TokenType[\"RCURLY\"] = \"}\";\n    TokenType[\"LCURLY\"] = \"{\";\n    TokenType[\"LT_ARROW\"] = \"<-\";\n    TokenType[\"RT_ARROW\"] = \"->\";\n    TokenType[\"EQ\"] = \"=\";\n    TokenType[\"LT\"] = \"<\";\n    TokenType[\"GT\"] = \">\";\n    TokenType[\"PLUS\"] = \"+\";\n    TokenType[\"MINUS\"] = \"-\";\n    TokenType[\"STAR\"] = \"*\";\n    TokenType[\"SLASH\"] = \"/\";\n})(TokenType || (TokenType = {}));\nvar Token = /** @class */ (function () {\n    function Token(tokenName, tokenValue) {\n        var _this = this;\n        // checks if two tokens share the same type and value.\n        this.equals = function (rhs) {\n            return _this.name == rhs.name && _this.value == rhs.value;\n        };\n        this.name = tokenName;\n        this.value = tokenValue;\n    }\n    // returns a string nicely formatted as \"tokenType: tokenValue\",\n    //  or for indents: \"indent: indentAmount\"\n    Token.prototype.toString = function () {\n        return this.name + \": \" + (this.name == TokenType.INDENT ? this.value.length : this.value);\n    };\n    // returns a thing formatted as Token(\"name\", \"value\")\n    Token.prototype.repr = function () {\n        return \"Token(\\\"\" + this.name + \"\\\", \\\"\" + this.value + \"\\\")\";\n    };\n    return Token;\n}());\nexports.Token = Token;\nfunction tokenise(source) {\n    var numChars = /[\\d\\.]/;\n    var wordChars = /[\\w\\$\\t;]/;\n    var tokens = [];\n    var tokenValue = \"\";\n    while (source) {\n        var head = source[0];\n        source = source.slice(1);\n        // TokenType.STRING\n        if (head == \"'\") {\n            if (source[0] == \"'\") {\n                source = source.slice(1);\n                tokenValue = \"\";\n                while (source && source.slice(0, 2) != \"''\") {\n                    tokenValue += source[0];\n                    source = source.slice(1);\n                }\n                source = source.slice(2);\n                tokens.push(new Token(TokenType.STRING, tokenValue));\n            }\n        }\n        // TokenType.NUMBER\n        else if (numChars.test(head)) {\n            tokenValue = head;\n            while (source && numChars.test(source[0])) {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            tokens.push(new Token(TokenType.NUMBER, tokenValue));\n        }\n        // TokenType.VAR_SET\n        else if (\"<-\".includes(head)) {\n            tokenValue = head;\n            if ([\"<-\", \"->\"].includes(head + source[0])) {\n                tokenValue += source[0];\n                source = source.slice(1);\n                tokens.push(new Token(TokenType.VAR_SET, tokenValue));\n            }\n            else {\n                tokens.push(new Token(TokenType.GENERAL, tokenValue));\n            }\n        }\n        // TokenType.LABEL\n        else if (head == \":\") {\n            tokenValue = \"\";\n            while (source && source[0] != \":\") {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            source = source.slice(1);\n            tokens.push(new Token(TokenType.LABEL, tokenValue));\n        }\n        // TokenType.DESTINATION\n        else if (head == \";\") {\n            tokenValue = \"\";\n            while (source && source[0] != \";\") {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            source = source.slice(1);\n            tokens.push(new Token(TokenType.DESTINATION, tokenValue));\n        }\n        // TokenType.WORD\n        else if (wordChars.test(head)) {\n            tokenValue = head;\n            while (source && wordChars.test(source[0])) {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            tokens.push(new Token(TokenType.WORD, tokenValue));\n        }\n        // TokenType.INDENT\n        else if (head == \"\\n\") {\n            tokenValue = \"\";\n            while (source && source[0] == \"\\u200B\") {\n                tokenValue += \"\\u200B\";\n                source = source.slice(1);\n            }\n            tokens.push(new Token(TokenType.INDENT, tokenValue));\n        }\n        // comments aren't tokens, obviously.\n        else if (head == \"#\") {\n            while (source && source[0] != \"\\n\") {\n                source = source.slice(1);\n            }\n        }\n        // TokenType.GENERAL - all else except spaces because they're dumb\n        else if (head != \" \") {\n            tokens.push(new Token(TokenType.GENERAL, head));\n        }\n    }\n    return tokens;\n}\nexports.tokenise = tokenise;\n\n\n//# sourceURL=webpack://cursed-language/./src/lexer.ts?");

/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.parse = void 0;\nvar lexer = __webpack_require__(/*! ./lexer */ \"./src/lexer.ts\");\nfunction parseTokens(tokens) {\n    return null; //todo\n}\nfunction parse(code) {\n    return parseTokens(lexer.tokenise(code));\n}\nexports.parse = parse;\n\n\n//# sourceURL=webpack://cursed-language/./src/parser.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;