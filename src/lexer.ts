/*
 * File: lexer.ts
 * This wretched file takes the accursed source code and transforms it
 * into a list of assuredly horrid tokens, ripe for the parsing.
 */

/*
 * Token types include:
 *   STRING
 *      Strings, e.g. ''Hello''
 *   NUMBER
 *      Numbers, e.g. 123, 456.789
 *   LT_ARROW
 *      Leftwards variable assignment
 *   RT_ARROW
 *      Rightwards variable assignment
 *   LABEL
 *      Labels, e.g. :label:
 *   DESTINATION
 *      A label destination, e.g. ;label;
 *   WORD
 *      Letter groups, typically keywords, e.g. "During", "Compare"
 *   INDENT
 *      A newline followed by spaces, e.g. "\n​​​​"
 *      To be used for control flow, similar to brackets
 *   BRACKET
 *      Any bracket, or "|", used for control flow
 *   COMPARE
 *      Comparators, such as "=" or "<"
 *   OPERATOR
 *      Operators, such as "+" or "%"
 *   GENERAL
 *      Everything else
 */
export enum TokenType {
    STRING = "string",
    NUMBER = "number",
    LT_ARROW = "lt_arrow",
    RT_ARROW = "rt_arrow",
    LABEL = "label",
    DESTINATION = "destination",
    WORD = "word",
    INDENT = "indent",
    BRACKET = "bracket",
    COMPARE = "compare",
    OPERATOR = "operator",
    GENERAL = "general",
}

export class Token {
    name: TokenType;
    value: string;

    constructor(tokenName: TokenType, tokenValue: string) {
        this.name = tokenName;
        this.value = tokenValue;
    }

    // returns a string nicely formatted as "tokenType: tokenValue",
    //  or for indents: "indent: indentAmount"
    toString(): string {
        return `${this.name}: ${
            this.name == TokenType.INDENT ? this.value.length : this.value
        }`;
    }

    // returns a thing formatted as Token("name", "value")
    repr(): string {
        return `Token("${this.name}", "${this.value}")`;
    }

    // checks if two tokens share the same type and value.
    equals(rhs: Token): boolean {
        return this.name == rhs.name && this.value == rhs.value;
    }
}

export function tokenise(source: string): Token[] {
    const numChars = /[\d\.]/;
    const wordChars = /[\w\$\t;]/;
    const bracketChars = /[\][)(}{|]/;
    const compareChars = /[=><]/;
    const operatorChars = /[\+-\/\*%\^~]/;

    let tokens: Token[] = [];
    let tokenValue: string = "";

    while (source) {
        let head: string = source[0];
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

        // TokenType.LT_ARROW
        else if ("<-" == head + source[0]) {
            tokenValue = "<-";
            source = source.slice(1);

            tokens.push(new Token(TokenType.LT_ARROW, tokenValue));
        }

        // TokenType.RT_ARROW
        else if ("->" == head + source[0]) {
            tokenValue = "->";
            source = source.slice(1);

            tokens.push(new Token(TokenType.RT_ARROW, tokenValue));
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

        // TokenType.BRACKET
        else if (bracketChars.test(head)) {
            tokens.push(new Token(TokenType.BRACKET, head));
        }

        //TokenType.COMPARE
        else if (compareChars.test(head)) {
            tokens.push(new Token(TokenType.COMPARE, head));
        }

        //TokenType.OPERATOR
        else if (operatorChars.test(head)) {
            tokens.push(new Token(TokenType.OPERATOR, head));
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
