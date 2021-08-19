"use strict";
/*
File: lexer.ts
This wretched file takes the accursed source code and transforms it
into a list of assuredly horrid tokens, ripe for the parsing.
*/
exports.__esModule = true;
exports.tokenise = exports.Token = void 0;
/*
 Token types include:
   STRING
      Strings, e.g. ''Hello''
   NUMBER
      Numbers, e.g. 123, 456.789
   VAR_SET
      Variable assignment, i.e. "<-" or "->"
   LABEL
      Labels, e.g. :label:
   DESTINATION
      A label destination, e.g. ;label;
   WORD
      Letter groups, typically keywords, e.g. "During", "Compare"
   INDENT
      A newline followed by spaces, e.g. "\n​​​​"
      To be used for structure branching, similar to "|"
   GENERAL
      Everything else, e.g. "}", "|", "+"
*/
var TokenType;
(function (TokenType) {
    TokenType[TokenType["STRING"] = 0] = "STRING";
    TokenType[TokenType["NUMBER"] = 1] = "NUMBER";
    TokenType[TokenType["VAR_SET"] = 2] = "VAR_SET";
    TokenType[TokenType["LABEL"] = 3] = "LABEL";
    TokenType[TokenType["DESTINATION"] = 4] = "DESTINATION";
    TokenType[TokenType["WORD"] = 5] = "WORD";
    TokenType[TokenType["INDENT"] = 6] = "INDENT";
    TokenType[TokenType["GENERAL"] = 7] = "GENERAL";
    TokenType["RPAREN"] = ")";
    TokenType["LPAREN"] = "(";
    TokenType["RSQUARE"] = "]";
    TokenType["LSQUARE"] = "[";
    TokenType["RCURLY"] = "}";
    TokenType["LCURLY"] = "{";
    TokenType["LT_ARROW"] = "<-";
    TokenType["RT_ARROW"] = "->";
    TokenType["EQ"] = "=";
    TokenType["LT"] = "<";
    TokenType["GT"] = ">";
    TokenType["PLUS"] = "+";
    TokenType["MINUS"] = "-";
    TokenType["STAR"] = "*";
    TokenType["SLASH"] = "/";
})(TokenType || (TokenType = {}));
var Token = /** @class */ (function () {
    function Token(tokenName, tokenValue) {
        var _this = this;
        // checks if two tokens share the same type and value.
        this.equals = function (rhs) {
            return (_this.name == rhs.name && _this.value == rhs.value);
        };
        this.name = tokenName;
        this.value = tokenValue;
    }
    // returns a string nicely formatted as "tokenType: tokenValue",
    //  or for indents: "indent: indentAmount"
    Token.prototype.toString = function () {
        return this.name + ": " + (this.name == TokenType.INDENT
            ? this.value.length
            : this.value);
    };
    // returns a thing formatted as Token("name", "value")
    Token.prototype.repr = function () {
        return "Token(\"" + this.name + "\", \"" + this.value + "\")";
    };
    return Token;
}());
exports.Token = Token;
function tokenise(source) {
    var numChars = /[\d\.]/;
    var wordChars = /[\w\$\t;]/;
    var tokens = [];
    var tokenValue = "";
    while (source) {
        var head = source[0];
        source = source.slice(1);
        // TokenType.STRING
        if (head == "'") {
            if (source[0] == "'") {
                source = source.slice(1);
                tokenValue = "";
                while (source && source.slice(0, 2) != "''") {
                    tokenValue += source[0];
                    source = source.slice(1);
                }
                source = source.slice(2);
                tokens.push(new Token(TokenType.STRING, tokenValue));
            }
        }
        // TokenType.NUMBER
        else if (numChars.test(head)) {
            tokenValue = head;
            while (source && numChars.test(source[0])) {
                tokenValue += source[0];
                source = source.slice(1);
            }
            tokens.push(new Token(TokenType.NUMBER, tokenValue));
        }
        // TokenType.VAR_SET
        else if ("<-".includes(head)) {
            tokenValue = head;
            if (["<-", "->"].includes(head + source[0])) {
                tokenValue += source[0];
                source = source.slice(1);
                tokens.push(new Token(TokenType.VAR_SET, tokenValue));
            }
            else {
                tokens.push(new Token(TokenType.GENERAL, tokenValue));
            }
        }
        // TokenType.LABEL
        else if (head == ":") {
            tokenValue = "";
            while (source && source[0] != ":") {
                tokenValue += source[0];
                source = source.slice(1);
            }
            source = source.slice(1);
            tokens.push(new Token(TokenType.LABEL, tokenValue));
        }
        // TokenType.DESTINATION
        else if (head == ";") {
            tokenValue = "";
            while (source && source[0] != ";") {
                tokenValue += source[0];
                source = source.slice(1);
            }
            source = source.slice(1);
            tokens.push(new Token(TokenType.DESTINATION, tokenValue));
        }
        // TokenType.WORD
        else if (wordChars.test(head)) {
            tokenValue = head;
            while (source && wordChars.test(source[0])) {
                tokenValue += source[0];
                source = source.slice(1);
            }
            tokens.push(new Token(TokenType.WORD, tokenValue));
        }
        // TokenType.INDENT
        else if (head == "\n") {
            tokenValue = "";
            while (source && source[0] == "\u200B") {
                tokenValue += "\u200B";
                source = source.slice(1);
            }
            tokens.push(new Token(TokenType.INDENT, tokenValue));
        }
        // comments aren't tokens, obviously.
        else if (head == "#") {
            while (source && source[0] != "\n") {
                source = source.slice(1);
            }
        }
        // TokenType.GENERAL - all else except spaces because they're dumb
        else if (head != " ") {
            tokens.push(new Token(TokenType.GENERAL, head));
        }
    }
    return tokens;
}
exports.tokenise = tokenise;
