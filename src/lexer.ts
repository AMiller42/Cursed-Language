/*
File: lexer.ts
This wretched file takes the accursed source code and transforms it
into a list of assuredly horrid tokens, ripe for the parsing.
*/

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
enum TokenType {
    STRING,
    NUMBER,
    VAR_SET,
    LABEL,
    DESTINATION,
    WORD,
    INDENT,
    GENERAL,
    RPAREN = ")", //Parentheses are flipped: )(
    LPAREN = "(",
    RSQUARE = "]", //Square brackets are flipped: ][
    LSQUARE = "[",
    RCURLY = "}", //Curly braces are flipped: }{
    LCURLY = "{",
    LT_ARROW = "<-", //For setting variables
    RT_ARROW = "->",
    EQ = "=",
    LT = "<",
    GT = ">",
    PLUS = "+",
    MINUS = "-",
    STAR = "*",
    SLASH = "/",
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
    equals = (rhs: Token): boolean =>
        this.name == rhs.name && this.value == rhs.value;
}

export function tokenise(source: string): Token[] {
    const numChars = /[\d\.]/;
    const wordChars = /[\w\$\t;]/;

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

        // TokenType.VAR_SET
        else if ("<-".includes(head)) {
            tokenValue = head;

            if (["<-", "->"].includes(head + source[0])) {
                tokenValue += source[0];
                source = source.slice(1);

                tokens.push(new Token(TokenType.VAR_SET, tokenValue));
            } else {
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
