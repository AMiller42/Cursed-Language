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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.info = exports.warning = exports.error = exports.MsgLevel = void 0;\nvar MsgLevel;\n(function (MsgLevel) {\n    MsgLevel[MsgLevel[\"ERROR\"] = 0] = \"ERROR\";\n    MsgLevel[MsgLevel[\"WARNING\"] = 1] = \"WARNING\";\n    MsgLevel[MsgLevel[\"INFO\"] = 2] = \"INFO\";\n})(MsgLevel = exports.MsgLevel || (exports.MsgLevel = {}));\nfunction compilerMsg(msg, level, help) {\n    return help === undefined\n        ? {\n            msg: msg,\n            level: level,\n        }\n        : {\n            msg: msg,\n            level: level,\n            help: help,\n        };\n}\nfunction error(msg, help) {\n    return compilerMsg(msg, MsgLevel.ERROR, help);\n}\nexports.error = error;\nfunction warning(msg, help) {\n    return compilerMsg(msg, MsgLevel.WARNING, help);\n}\nexports.warning = warning;\nfunction info(msg, help) {\n    return compilerMsg(msg, MsgLevel.INFO, help);\n}\nexports.info = info;\n\n\n//# sourceURL=webpack://cursed-language/./src/cursedmsg.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.execute = exports.linkify = void 0;\nvar interpreter = __webpack_require__(/*! ./interpreter */ \"./src/interpreter.ts\");\nconsole.log(\"Here!\");\n/******************************* BEGIN HELPERS *******************************/\nfunction getFlags() {\n    return [];\n}\nfunction getInputs() {\n    return [];\n}\nfunction getCode() {\n    return document.getElementById(\"codebox\").innerText;\n}\n//From https://stackoverflow.com/a/35385518\nfunction htmlToElement(html) {\n    var template = document.createElement(\"template\");\n    html = html.trim(); // Never return a text node of whitespace as the result\n    template.innerHTML = html;\n    return template.content.firstChild;\n}\n/******************************** END HELPERS ********************************/\nfunction linkify() {\n    var flags = getFlags().join(\" \");\n    var input = getInputs().join(\"\\n\");\n    var code = getCode();\n    var site = window.location.origin + window.location.pathname;\n    var encodedFlags = \"flags=\" + encodeURIComponent(flags);\n    var encodedInput = \"input=\" + encodeURIComponent(input);\n    var encodedCode = \"code=\" + encodeURIComponent(code);\n    var link = site + \"?\" + encodedFlags + \"&\" + encodedInput + \"&\" + encodedCode;\n    var response = prompt('Link\\n created.\\n  If\\n   you\\n    want\\n     to\\n      copy\\n       the\\n        link,\\n         type\\n          \"yez plez\"');\n    if (response === \"yez plez\") {\n        navigator.clipboard.writeText(link).then(function () {\n            alert(\"Copied!\");\n        }, function (err) {\n            alert(\"Here's the link to copy:\\n\" + link);\n        });\n    }\n}\nexports.linkify = linkify;\nfunction execute() {\n    var flags = getFlags();\n    var inputs = getInputs();\n    var code = getCode();\n    var res = interpreter.interpret(code, inputs, flags);\n    alert(res);\n}\nexports.execute = execute;\nfunction popupJohnvertise() {\n    var screenWidth = window.innerWidth;\n    var screenHeight = window.innerHeight;\n    console.log(screenHeight, screenWidth);\n    // set size of the popup with a random multiplier\n    var adSize = 1.25 - Math.random();\n    var adWidth = Math.round(732 * adSize);\n    var adHeight = Math.round(94 * adSize);\n    // set a random position for the ad\n    var offsetX = \"\" + Math.floor(Math.random() * (screenWidth - adWidth));\n    var offsetY = Math.floor(Math.random() * (screenHeight - adHeight));\n    // if the ad is wider than the screen, get rid of the x offset\n    offsetX = adWidth >= screenWidth ? \"\" : \"right:\" + offsetX + \"px;\";\n    // spawn the ad\n    var x = \"<img src=\\\"./img/x.gif\\\" style=\\\"height: 12px; width: 12px; cursor:grab;\\\" onclick=\\\"this.parentElement.remove();\\\"/>\";\n    var advert = \"<iframe src=\\\"https://john.mondecitronne.com/embed?ref=http://amiller42.github.io/Cursed-Language\\\"\\n        style=\\\"margin-left:auto; display:block; max-width:\" + adWidth + \"px; width:100%; height:\" + adHeight + \"px; border:none;\\\"\\n    ></iframe>\";\n    var html = \"<div style=\\\"position:fixed; top:\" + offsetY + \"px; \" + offsetX + \" height:\" + adHeight + \"px; width:\" + adWidth + \"px;\\\" id=\\\"popup\\\">\\n            \" + x + advert + \"\\n        </div>\";\n    document.body.appendChild(htmlToElement(html));\n    // wait anywhere from 15-90 seconds to spawn another popup\n    setTimeout(popupJohnvertise, Math.floor(Math.random() * 75000 + 15000));\n}\n// wait anywhere from 2-10 seconds before the first popup\nsetTimeout(popupJohnvertise, Math.floor(Math.random() * 8000 + 2000));\n//Set event listeners here because the functions can't be accessed from\n//the HTML directly for some reason.\n//TODO figure out a way to get around that ^\nwindow.addEventListener(\"DOMContentLoaded\", function (event) {\n    document.getElementById(\"run\").onclick = execute;\n    document.getElementById(\"link\").onclick = linkify;\n});\n\n\n//# sourceURL=webpack://cursed-language/./src/index.ts?");

/***/ }),

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.interpret = void 0;\nvar parser_1 = __webpack_require__(/*! ./parser */ \"./src/parser.ts\");\nfunction interpret(code, inputs, flags) {\n    if (inputs === void 0) { inputs = []; }\n    if (flags === void 0) { flags = []; }\n    var ast = parser_1.parse(code);\n    execAST(ast, inputs, flags);\n    return \"Not done yet, you sussy baka!\";\n}\nexports.interpret = interpret;\nfunction execAST(ast, inputs, flags) { }\n\n\n//# sourceURL=webpack://cursed-language/./src/interpreter.ts?");

/***/ }),

/***/ "./src/lexer.ts":
/*!**********************!*\
  !*** ./src/lexer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*\n * File: lexer.ts\n * This wretched file takes the accursed source code and transforms it\n * into a list of assuredly horrid tokens, ripe for the parsing.\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tokenise = exports.Token = exports.TokenType = void 0;\n/*\n * Token types include:\n *   STRING\n *      Strings, e.g. ''Hello''\n *   NUMBER\n *      Numbers, e.g. 123, 456.789\n *   LT_ARROW\n *      Leftwards variable assignment\n *   RT_ARROW\n *      Rightwards variable assignment\n *   LABEL\n *      Labels, e.g. :label:\n *   DESTINATION\n *      A label destination, e.g. ;label;\n *   WORD\n *      Letter groups, typically keywords, e.g. \"During\", \"Compare\"\n *   INDENT\n *      A newline followed by spaces, e.g. \"\\n​​​​\"\n *      To be used for control flow, similar to brackets\n *   BRACKET\n *      Any bracket, or \"|\", used for control flow\n *   COMPARE\n *      Comparators, such as \"=\" or \"<\"\n *   OPERATOR\n *      Operators, such as \"+\" or \"%\"\n *   GENERAL\n *      Everything else\n */\nvar TokenType;\n(function (TokenType) {\n    TokenType[\"STRING\"] = \"string\";\n    TokenType[\"NUMBER\"] = \"number\";\n    TokenType[\"LT_ARROW\"] = \"lt_arrow\";\n    TokenType[\"RT_ARROW\"] = \"rt_arrow\";\n    TokenType[\"LABEL\"] = \"label\";\n    TokenType[\"DESTINATION\"] = \"destination\";\n    TokenType[\"WORD\"] = \"word\";\n    TokenType[\"INDENT\"] = \"indent\";\n    TokenType[\"BRACKET\"] = \"bracket\";\n    TokenType[\"COMPARE\"] = \"compare\";\n    TokenType[\"OPERATOR\"] = \"operator\";\n    TokenType[\"GENERAL\"] = \"general\";\n})(TokenType = exports.TokenType || (exports.TokenType = {}));\nvar Token = /** @class */ (function () {\n    function Token(tokenName, tokenValue) {\n        this.name = tokenName;\n        this.value = tokenValue;\n    }\n    // returns a string nicely formatted as \"tokenType: tokenValue\",\n    //  or for indents: \"indent: indentAmount\"\n    Token.prototype.toString = function () {\n        return this.name + \": \" + (this.name == TokenType.INDENT ? this.value.length : this.value);\n    };\n    // returns a thing formatted as Token(\"name\", \"value\")\n    Token.prototype.repr = function () {\n        return \"Token(\\\"\" + this.name + \"\\\", \\\"\" + this.value + \"\\\")\";\n    };\n    // checks if two tokens share the same type and value.\n    Token.prototype.equals = function (rhs) {\n        return this.name == rhs.name && this.value == rhs.value;\n    };\n    return Token;\n}());\nexports.Token = Token;\nfunction tokenise(source) {\n    var numChars = /[\\d\\.]/;\n    var wordChars = /[\\w\\$\\t;]/;\n    var bracketChars = /[\\][)(}{|]/;\n    var compareChars = /[=><]/;\n    var operatorChars = /[\\+-\\/\\*%\\^~]/;\n    var tokens = [];\n    var tokenValue = \"\";\n    while (source) {\n        var head = source[0];\n        source = source.slice(1);\n        // TokenType.STRING\n        if (head == \"'\") {\n            if (source[0] == \"'\") {\n                source = source.slice(1);\n                tokenValue = \"\";\n                while (source && source.slice(0, 2) != \"''\") {\n                    tokenValue += source[0];\n                    source = source.slice(1);\n                }\n                source = source.slice(2);\n                tokens.push(new Token(TokenType.STRING, tokenValue));\n            }\n        }\n        // TokenType.NUMBER\n        else if (numChars.test(head)) {\n            tokenValue = head;\n            while (source && numChars.test(source[0])) {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            tokens.push(new Token(TokenType.NUMBER, tokenValue));\n        }\n        // TokenType.LT_ARROW\n        else if (\"<-\" == head + source[0]) {\n            tokenValue = \"<-\";\n            source = source.slice(1);\n            tokens.push(new Token(TokenType.LT_ARROW, tokenValue));\n        }\n        // TokenType.RT_ARROW\n        else if (\"->\" == head + source[0]) {\n            tokenValue = \"->\";\n            source = source.slice(1);\n            tokens.push(new Token(TokenType.RT_ARROW, tokenValue));\n        }\n        // TokenType.LABEL\n        else if (head == \":\") {\n            tokenValue = \"\";\n            while (source && source[0] != \":\") {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            source = source.slice(1);\n            tokens.push(new Token(TokenType.LABEL, tokenValue));\n        }\n        // TokenType.DESTINATION\n        else if (head == \";\") {\n            tokenValue = \"\";\n            while (source && source[0] != \";\") {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            source = source.slice(1);\n            tokens.push(new Token(TokenType.DESTINATION, tokenValue));\n        }\n        // TokenType.WORD\n        else if (wordChars.test(head)) {\n            tokenValue = head;\n            while (source && wordChars.test(source[0])) {\n                tokenValue += source[0];\n                source = source.slice(1);\n            }\n            tokens.push(new Token(TokenType.WORD, tokenValue));\n        }\n        // TokenType.INDENT\n        else if (head == \"\\n\") {\n            tokenValue = \"\";\n            while (source && source[0] == \"\\u200B\") {\n                tokenValue += \"\\u200B\";\n                source = source.slice(1);\n            }\n            tokens.push(new Token(TokenType.INDENT, tokenValue));\n        }\n        // TokenType.BRACKET\n        else if (bracketChars.test(head)) {\n            tokens.push(new Token(TokenType.BRACKET, head));\n        }\n        //TokenType.COMPARE\n        else if (compareChars.test(head)) {\n            tokens.push(new Token(TokenType.COMPARE, head));\n        }\n        //TokenType.OPERATOR\n        else if (operatorChars.test(head)) {\n            tokens.push(new Token(TokenType.OPERATOR, head));\n        }\n        // comments aren't tokens, obviously.\n        else if (head == \"#\") {\n            while (source && source[0] != \"\\n\") {\n                source = source.slice(1);\n            }\n        }\n        // TokenType.GENERAL - all else except spaces because they're dumb\n        else if (head != \" \") {\n            tokens.push(new Token(TokenType.GENERAL, head));\n        }\n    }\n    return tokens;\n}\nexports.tokenise = tokenise;\n\n\n//# sourceURL=webpack://cursed-language/./src/lexer.ts?");

/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.parse = void 0;\nvar cursedmsg_1 = __webpack_require__(/*! ./cursedmsg */ \"./src/cursedmsg.ts\");\nvar lexer_1 = __webpack_require__(/*! ./lexer */ \"./src/lexer.ts\");\nfunction parse(code) {\n    var res = parseTokens.parse(lexer_1.tokenise(code));\n    //Ensure there isn't any junk at the end\n    if (res.tokens.length !== 0) {\n        return new Res(res.tokens, res.msgs.concat(cursedmsg_1.error(\"Your program's too long, please remove the last 4 characters\")));\n    }\n    return res;\n}\nexports.parse = parse;\n/**\n * A parser result.\n * @returns A three-element list where the second element is\n * the remaining tokens left to parse and the third is all the\n * errors/warnings/info messages collected along the way.\n * If it parsed properly, the first element is the created AST, else null.\n */\nvar Res = /** @class */ (function () {\n    function Res(tokens, msgs, ast) {\n        this.ast = ast;\n        this.tokens = tokens;\n        this.msgs = msgs;\n    }\n    Res.prototype.map = function (f) {\n        if (this.ast === undefined) {\n            return this;\n        }\n        else {\n            return new Res(this.tokens, this.msgs, f(this.ast));\n        }\n    };\n    return Res;\n}());\nvar Parser = /** @class */ (function () {\n    function Parser(parse) {\n        this.parse = parse;\n    }\n    return Parser;\n}());\nfunction parseAny() {\n    var parsers = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        parsers[_i] = arguments[_i];\n    }\n    return new Parser(function (tokens) {\n        var msgs = [];\n        for (var _i = 0, parsers_1 = parsers; _i < parsers_1.length; _i++) {\n            var parser = parsers_1[_i];\n            console.log(\"Here, \", parser);\n            var res = parser.parse(tokens);\n            //If this pattern matched, return its match\n            if (res.ast !== null && res.ast !== undefined) {\n                return res;\n            }\n            //Otherwise, add the messages from this parser for cursedness.\n            msgs.push.apply(msgs, res.msgs);\n        }\n        return new Res(tokens, msgs);\n    });\n}\n/**\n * Takes multiple parsers and tries to match each in turn. If all succeed,\n * the result contains a list of all of their successes. Otherwise, the result\n * AST is undefined.\n * TODO These are some crazy types, make it simpler maybe\n */\nfunction parseSeq() {\n    var parsers = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        parsers[_i] = arguments[_i];\n    }\n    return new Parser(function (tokens) {\n        var ast = [];\n        var msgs = [];\n        for (var _i = 0, parsers_2 = parsers; _i < parsers_2.length; _i++) {\n            var parser = parsers_2[_i];\n            var res = parser.parse(tokens);\n            //If this pattern didn't match, return\n            if (res.ast === null || res.ast === undefined) {\n                return res;\n            }\n            //Otherwise, update tokens and msgs for the next parsers\n            ast.push(res.ast);\n            tokens = res.tokens;\n            msgs.push.apply(msgs, res.msgs);\n        }\n        return new Res(tokens, msgs, ast);\n    });\n}\nvar parseAssignStmt = new Parser(function (tokens) {\n    if (tokens.length === 0) {\n        return new Res(tokens, [\n            cursedmsg_1.error(\"Ran out\", \"Add the following code to the end of your program: \" +\n                \"println(''Padding to make it compile'')<-out goto end; exit(1).\"),\n        ]);\n    }\n    console.log(\"Tokens = \" + tokens);\n    return new Res(tokens, []);\n});\nvar parseStmt = parseAny(parseAssignStmt);\nvar parseTokens = parseAny(parseStmt);\n\n\n//# sourceURL=webpack://cursed-language/./src/parser.ts?");

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