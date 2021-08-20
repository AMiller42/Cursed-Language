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

/***/ "./src/cursedmsg.ts":
/*!**************************!*\
  !*** ./src/cursedmsg.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.info = exports.warning = exports.error = exports.MsgLevel = void 0;\r\nvar MsgLevel;\r\n(function (MsgLevel) {\r\n    MsgLevel[MsgLevel[\"ERROR\"] = 0] = \"ERROR\";\r\n    MsgLevel[MsgLevel[\"WARNING\"] = 1] = \"WARNING\";\r\n    MsgLevel[MsgLevel[\"INFO\"] = 2] = \"INFO\";\r\n})(MsgLevel = exports.MsgLevel || (exports.MsgLevel = {}));\r\nfunction compilerMsg(msg, level, help) {\r\n    return help === undefined\r\n        ? {\r\n            msg: msg,\r\n            level: level,\r\n        }\r\n        : {\r\n            msg: msg,\r\n            level: level,\r\n            help: help,\r\n        };\r\n}\r\nfunction error(msg, help) {\r\n    return compilerMsg(msg, MsgLevel.ERROR, help);\r\n}\r\nexports.error = error;\r\nfunction warning(msg, help) {\r\n    return compilerMsg(msg, MsgLevel.WARNING, help);\r\n}\r\nexports.warning = warning;\r\nfunction info(msg, help) {\r\n    return compilerMsg(msg, MsgLevel.INFO, help);\r\n}\r\nexports.info = info;\r\n\n\n//# sourceURL=webpack://cursed-language/./src/cursedmsg.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.execute = exports.linkify = void 0;\r\nvar interpreter = __webpack_require__(/*! ./interpreter */ \"./src/interpreter.ts\");\r\nconsole.log(\"Here!\");\r\n/******************************* BEGIN HELPERS *******************************/\r\nfunction getFlags() {\r\n    return [];\r\n}\r\nfunction getInputs() {\r\n    return [];\r\n}\r\nfunction getCode() {\r\n    return document.getElementById(\"codebox\").innerText;\r\n}\r\n//From https://stackoverflow.com/a/35385518\r\nfunction htmlToElement(html) {\r\n    var template = document.createElement(\"template\");\r\n    html = html.trim(); // Never return a text node of whitespace as the result\r\n    template.innerHTML = html;\r\n    return template.content.firstChild;\r\n}\r\n/******************************** END HELPERS ********************************/\r\nfunction linkify() {\r\n    var flags = getFlags().join(\" \");\r\n    var input = getInputs().join(\"\\n\");\r\n    var code = getCode();\r\n    var site = window.location.origin + window.location.pathname;\r\n    var encodedFlags = \"flags=\" + encodeURIComponent(flags);\r\n    var encodedInput = \"input=\" + encodeURIComponent(input);\r\n    var encodedCode = \"code=\" + encodeURIComponent(code);\r\n    var link = site + \"?\" + encodedFlags + \"&\" + encodedInput + \"&\" + encodedCode;\r\n    alert(link);\r\n}\r\nexports.linkify = linkify;\r\nfunction execute() {\r\n    var flags = getFlags();\r\n    var inputs = getInputs();\r\n    var code = getCode();\r\n    var res = interpreter.interpret(code, inputs, flags);\r\n    alert(res);\r\n}\r\nexports.execute = execute;\r\nfunction popupJohnvertise() {\r\n    var screenWidth = window.innerWidth;\r\n    var screenHeight = window.innerHeight;\r\n    console.log(screenHeight, screenWidth);\r\n    // set size of the popup with a random multiplier\r\n    var adSize = 1.25 - Math.random();\r\n    var adWidth = Math.round(732 * adSize);\r\n    var adHeight = Math.round(94 * adSize);\r\n    // set a random position for the ad\r\n    var offsetX = \"\" + Math.floor(Math.random() * (screenWidth - adWidth));\r\n    var offsetY = Math.floor(Math.random() * (screenHeight - adHeight));\r\n    // if the ad is wider than the screen, get rid of the x offset\r\n    offsetX = adWidth >= screenWidth ? \"\" : \"right:\" + offsetX + \"px;\";\r\n    // spawn the ad\r\n    var x = \"<img src=\\\"./img/x.gif\\\" style=\\\"height: 12px; width: 12px; cursor:grab;\\\" onclick=\\\"this.parentElement.remove();\\\"/>\";\r\n    var advert = \"<iframe src=\\\"https://john.mondecitronne.com/embed?ref=http://amiller42.github.io/Cursed-Language\\\"\\n        style=\\\"margin-left:auto; display:block; max-width:\" + adWidth + \"px; width:100%; height:\" + adHeight + \"px; border:none;\\\"\\n    ></iframe>\";\r\n    var html = \"<div style=\\\"position:fixed; top:\" + offsetY + \"px; \" + offsetX + \" height:\" + adHeight + \"px; width:\" + adWidth + \"px;\\\" id=\\\"popup\\\">\\n            \" + x + advert + \"\\n        </div>\";\r\n    document.body.appendChild(htmlToElement(html));\r\n    // wait anywhere from 15-90 seconds to spawn another popup\r\n    setTimeout(popupJohnvertise, Math.floor(Math.random() * 75000 + 15000));\r\n}\r\n// wait anywhere from 2-10 seconds before the first popup\r\nsetTimeout(popupJohnvertise, Math.floor(Math.random() * 8000 + 2000));\r\n//Set event listeners here because the functions can't be accessed from\r\n//the HTML directly for some reason.\r\n//TODO figure out a way to get around that ^\r\nwindow.addEventListener(\"DOMContentLoaded\", function (event) {\r\n    document.getElementById(\"run\").onclick = execute;\r\n    document.getElementById(\"link\").onclick = linkify;\r\n});\r\n\n\n//# sourceURL=webpack://cursed-language/./src/index.ts?");

/***/ }),

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.interpret = void 0;\r\nvar parser_1 = __webpack_require__(/*! ./parser */ \"./src/parser.ts\");\r\nfunction interpret(code, inputs, flags) {\r\n    if (inputs === void 0) { inputs = []; }\r\n    if (flags === void 0) { flags = []; }\r\n    var ast = parser_1.parse(code);\r\n    execAST(ast, inputs, flags);\r\n}\r\nexports.interpret = interpret;\r\nfunction execAST(ast, inputs, flags) { }\r\n\n\n//# sourceURL=webpack://cursed-language/./src/interpreter.ts?");

/***/ }),

/***/ "./src/lexer.ts":
/*!**********************!*\
  !*** ./src/lexer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n/*\r\nFile: lexer.ts\r\nThis wretched file takes the accursed source code and transforms it\r\ninto a list of assuredly horrid tokens, ripe for the parsing.\r\n*/\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.tokenise = exports.Token = exports.TokenType = void 0;\r\n/*\r\n Token types include:\r\n   STRING\r\n      Strings, e.g. ''Hello''\r\n   NUMBER\r\n      Numbers, e.g. 123, 456.789\r\n   VAR_SET\r\n      Variable assignment, i.e. \"<-\" or \"->\"\r\n   LABEL\r\n      Labels, e.g. :label:\r\n   DESTINATION\r\n      A label destination, e.g. ;label;\r\n   WORD\r\n      Letter groups, typically keywords, e.g. \"During\", \"Compare\"\r\n   INDENT\r\n      A newline followed by spaces, e.g. \"\\n​​​​\"\r\n      To be used for structure branching, similar to \"|\"\r\n   GENERAL\r\n      Everything else, e.g. \"}\", \"|\", \"+\"\r\n*/\r\nvar TokenType;\r\n(function (TokenType) {\r\n    TokenType[TokenType[\"STRING\"] = 0] = \"STRING\";\r\n    TokenType[TokenType[\"NUMBER\"] = 1] = \"NUMBER\";\r\n    TokenType[TokenType[\"VAR_SET\"] = 2] = \"VAR_SET\";\r\n    TokenType[TokenType[\"LABEL\"] = 3] = \"LABEL\";\r\n    TokenType[TokenType[\"DESTINATION\"] = 4] = \"DESTINATION\";\r\n    TokenType[TokenType[\"WORD\"] = 5] = \"WORD\";\r\n    TokenType[TokenType[\"INDENT\"] = 6] = \"INDENT\";\r\n    TokenType[TokenType[\"GENERAL\"] = 7] = \"GENERAL\";\r\n    TokenType[\"RPAREN\"] = \")\";\r\n    TokenType[\"LPAREN\"] = \"(\";\r\n    TokenType[\"RSQUARE\"] = \"]\";\r\n    TokenType[\"LSQUARE\"] = \"[\";\r\n    TokenType[\"RCURLY\"] = \"}\";\r\n    TokenType[\"LCURLY\"] = \"{\";\r\n    TokenType[\"LT_ARROW\"] = \"<-\";\r\n    TokenType[\"RT_ARROW\"] = \"->\";\r\n    TokenType[\"EQ\"] = \"=\";\r\n    TokenType[\"LT\"] = \"<\";\r\n    TokenType[\"GT\"] = \">\";\r\n    TokenType[\"PLUS\"] = \"+\";\r\n    TokenType[\"MINUS\"] = \"-\";\r\n    TokenType[\"STAR\"] = \"*\";\r\n    TokenType[\"SLASH\"] = \"/\";\r\n})(TokenType = exports.TokenType || (exports.TokenType = {}));\r\nvar Token = /** @class */ (function () {\r\n    function Token(tokenName, tokenValue) {\r\n        var _this = this;\r\n        // checks if two tokens share the same type and value.\r\n        this.equals = function (rhs) {\r\n            return _this.name == rhs.name && _this.value == rhs.value;\r\n        };\r\n        this.name = tokenName;\r\n        this.value = tokenValue;\r\n    }\r\n    // returns a string nicely formatted as \"tokenType: tokenValue\",\r\n    //  or for indents: \"indent: indentAmount\"\r\n    Token.prototype.toString = function () {\r\n        return this.name + \": \" + (this.name == TokenType.INDENT ? this.value.length : this.value);\r\n    };\r\n    // returns a thing formatted as Token(\"name\", \"value\")\r\n    Token.prototype.repr = function () {\r\n        return \"Token(\\\"\" + this.name + \"\\\", \\\"\" + this.value + \"\\\")\";\r\n    };\r\n    return Token;\r\n}());\r\nexports.Token = Token;\r\nfunction tokenise(source) {\r\n    var numChars = /[\\d\\.]/;\r\n    var wordChars = /[\\w\\$\\t;]/;\r\n    var tokens = [];\r\n    var tokenValue = \"\";\r\n    while (source) {\r\n        var head = source[0];\r\n        source = source.slice(1);\r\n        // TokenType.STRING\r\n        if (head == \"'\") {\r\n            if (source[0] == \"'\") {\r\n                source = source.slice(1);\r\n                tokenValue = \"\";\r\n                while (source && source.slice(0, 2) != \"''\") {\r\n                    tokenValue += source[0];\r\n                    source = source.slice(1);\r\n                }\r\n                source = source.slice(2);\r\n                tokens.push(new Token(TokenType.STRING, tokenValue));\r\n            }\r\n        }\r\n        // TokenType.NUMBER\r\n        else if (numChars.test(head)) {\r\n            tokenValue = head;\r\n            while (source && numChars.test(source[0])) {\r\n                tokenValue += source[0];\r\n                source = source.slice(1);\r\n            }\r\n            tokens.push(new Token(TokenType.NUMBER, tokenValue));\r\n        }\r\n        // TokenType.VAR_SET\r\n        else if (\"<-\".includes(head)) {\r\n            tokenValue = head;\r\n            if ([\"<-\", \"->\"].includes(head + source[0])) {\r\n                tokenValue += source[0];\r\n                source = source.slice(1);\r\n                tokens.push(new Token(TokenType.VAR_SET, tokenValue));\r\n            }\r\n            else {\r\n                tokens.push(new Token(TokenType.GENERAL, tokenValue));\r\n            }\r\n        }\r\n        // TokenType.LABEL\r\n        else if (head == \":\") {\r\n            tokenValue = \"\";\r\n            while (source && source[0] != \":\") {\r\n                tokenValue += source[0];\r\n                source = source.slice(1);\r\n            }\r\n            source = source.slice(1);\r\n            tokens.push(new Token(TokenType.LABEL, tokenValue));\r\n        }\r\n        // TokenType.DESTINATION\r\n        else if (head == \";\") {\r\n            tokenValue = \"\";\r\n            while (source && source[0] != \";\") {\r\n                tokenValue += source[0];\r\n                source = source.slice(1);\r\n            }\r\n            source = source.slice(1);\r\n            tokens.push(new Token(TokenType.DESTINATION, tokenValue));\r\n        }\r\n        // TokenType.WORD\r\n        else if (wordChars.test(head)) {\r\n            tokenValue = head;\r\n            while (source && wordChars.test(source[0])) {\r\n                tokenValue += source[0];\r\n                source = source.slice(1);\r\n            }\r\n            tokens.push(new Token(TokenType.WORD, tokenValue));\r\n        }\r\n        // TokenType.INDENT\r\n        else if (head == \"\\n\") {\r\n            tokenValue = \"\";\r\n            while (source && source[0] == \"\\u200B\") {\r\n                tokenValue += \"\\u200B\";\r\n                source = source.slice(1);\r\n            }\r\n            tokens.push(new Token(TokenType.INDENT, tokenValue));\r\n        }\r\n        // comments aren't tokens, obviously.\r\n        else if (head == \"#\") {\r\n            while (source && source[0] != \"\\n\") {\r\n                source = source.slice(1);\r\n            }\r\n        }\r\n        // TokenType.GENERAL - all else except spaces because they're dumb\r\n        else if (head != \" \") {\r\n            tokens.push(new Token(TokenType.GENERAL, head));\r\n        }\r\n    }\r\n    return tokens;\r\n}\r\nexports.tokenise = tokenise;\r\n\n\n//# sourceURL=webpack://cursed-language/./src/lexer.ts?");

/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.parse = void 0;\r\nvar cursedmsg_1 = __webpack_require__(/*! ./cursedmsg */ \"./src/cursedmsg.ts\");\r\nvar lexer_1 = __webpack_require__(/*! ./lexer */ \"./src/lexer.ts\");\r\nfunction parse(code) {\r\n    var res = parseTokens.parse(lexer_1.tokenise(code));\r\n    //Ensure there isn't any junk at the end\r\n    if (res.tokens.length !== 0) {\r\n        return new Res(res.tokens, res.msgs.concat(cursedmsg_1.error(\"Your program's too long, please remove the last 4 characters\")));\r\n    }\r\n    return res;\r\n}\r\nexports.parse = parse;\r\n/**\r\n * A parser result.\r\n * @returns A three-element list where the second element is\r\n * the remaining tokens left to parse and the third is all the\r\n * errors/warnings/info messages collected along the way.\r\n * If it parsed properly, the first element is the created AST, else null.\r\n */\r\nvar Res = /** @class */ (function () {\r\n    function Res(tokens, msgs, ast) {\r\n        this.ast = ast;\r\n        this.tokens = tokens;\r\n        this.msgs = msgs;\r\n    }\r\n    Res.prototype.map = function (f) {\r\n        if (this.ast === undefined) {\r\n            return this;\r\n        }\r\n        else {\r\n            return new Res(this.tokens, this.msgs, f(this.ast));\r\n        }\r\n    };\r\n    return Res;\r\n}());\r\nvar Parser = /** @class */ (function () {\r\n    function Parser(parse) {\r\n        this.parse = parse;\r\n    }\r\n    return Parser;\r\n}());\r\nfunction parseAny() {\r\n    var parsers = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        parsers[_i] = arguments[_i];\r\n    }\r\n    return new Parser(function (tokens) {\r\n        var msgs = [];\r\n        for (var _i = 0, parsers_1 = parsers; _i < parsers_1.length; _i++) {\r\n            var parser = parsers_1[_i];\r\n            console.log(\"Here, \", parser);\r\n            var res = parser.parse(tokens);\r\n            //If this pattern matched, return its match\r\n            if (res.ast !== null && res.ast !== undefined) {\r\n                return res;\r\n            }\r\n            //Otherwise, add the messages from this parser for cursedness.\r\n            msgs.push.apply(msgs, res.msgs);\r\n        }\r\n        return new Res(tokens, msgs);\r\n    });\r\n}\r\n/**\r\n * Takes multiple parsers and tries to match each in turn. If all succeed,\r\n * the result contains a list of all of their successes. Otherwise, the result\r\n * AST is undefined.\r\n * TODO These are some crazy types, make it simpler maybe\r\n */\r\nfunction parseSeq() {\r\n    var parsers = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        parsers[_i] = arguments[_i];\r\n    }\r\n    return new Parser(function (tokens) {\r\n        var ast = [];\r\n        var msgs = [];\r\n        for (var _i = 0, parsers_2 = parsers; _i < parsers_2.length; _i++) {\r\n            var parser = parsers_2[_i];\r\n            var res = parser.parse(tokens);\r\n            //If this pattern didn't match, return\r\n            if (res.ast === null || res.ast === undefined) {\r\n                return res;\r\n            }\r\n            //Otherwise, update tokens and msgs for the next parsers\r\n            ast.push(res.ast);\r\n            tokens = res.tokens;\r\n            msgs.push.apply(msgs, res.msgs);\r\n        }\r\n        return new Res(tokens, msgs, ast);\r\n    });\r\n}\r\nvar parseAssignStmt = new Parser(function (tokens) {\r\n    if (tokens.length === 0) {\r\n        return new Res(tokens, [\r\n            cursedmsg_1.error(\"Ran out\", \"Add the following code to the end of your program: \" +\r\n                \"println(''Padding to make it compile'')<-out goto end; exit(1).\"),\r\n        ]);\r\n    }\r\n    console.log(\"Tokens = \" + tokens);\r\n    return new Res(tokens, []);\r\n});\r\nvar parseStmt = parseAny(parseAssignStmt);\r\nvar parseTokens = parseAny(parseStmt);\r\n\n\n//# sourceURL=webpack://cursed-language/./src/parser.ts?");

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