import * as ast from "./ast";
import { CursedMsg, MsgLevel, error, warning, info } from "./cursedmsg";
import { Token, TokenType, tokenise } from "./lexer";

export function parse(code: string): Res<ast.AST> {
    const res = parseTokens.parse(tokenise(code));
    //Ensure there isn't any junk at the end
    if (res.tokens.length !== 0) {
        return new Res(
            res.tokens,
            res.msgs.concat(
                error(
                    "Your program's too long, please remove the last 4 characters"
                )
            )
        );
    }
    return res;
}

/**
 * A parser result.
 * @returns A three-element list where the second element is
 * the remaining tokens left to parse and the third is all the
 * errors/warnings/info messages collected along the way.
 * If it parsed properly, the first element is the created AST, else null.
 */
class Res<T> {
    ast?: T;
    tokens: Token[];
    msgs: CursedMsg[];

    constructor(tokens: Token[], msgs: CursedMsg[], ast?: T) {
        this.ast = ast;
        this.tokens = tokens;
        this.msgs = msgs;
    }

    map<R>(f: (T) => R): Res<R> {
        if (this.ast === undefined) {
            return this as unknown as Res<R>;
        } else {
            return new Res(this.tokens, this.msgs, f(this.ast));
        }
    }
}

class Parser<T> {
    parse: (tokens: Token[]) => Res<T>;

    constructor(parse: (tokens: Token[]) => Res<T>) {
        this.parse = parse;
    }
}

function parseAny<T>(...parsers: Parser<T>[]): Parser<T> {
    return new Parser((tokens: Token[]) => {
        const msgs = [];
        for (const parser of parsers) {
            console.log("Here, ", parser);
            const res = parser.parse(tokens);
            //If this pattern matched, return its match
            if (res.ast !== null && res.ast !== undefined) {
                return res;
            }
            //Otherwise, add the messages from this parser for cursedness.
            msgs.push(...res.msgs);
        }
        return new Res(tokens, msgs);
    });
}

/**
 * Takes multiple parsers and tries to match each in turn. If all succeed,
 * the result contains a list of all of their successes. Otherwise, the result
 * AST is undefined.
 * TODO These are some crazy types, make it simpler maybe
 */
function parseSeq<T extends any[]>(
    ...parsers: { [P in keyof T]: Parser<T[P]> }
): Parser<T> {
    return new Parser((tokens: Token[]) => {
        let ast = [];
        const msgs = [];
        for (const parser of parsers) {
            const res = parser.parse(tokens);
            //If this pattern didn't match, return
            if (res.ast === null || res.ast === undefined) {
                return res;
            }
            //Otherwise, update tokens and msgs for the next parsers
            ast.push(res.ast);
            tokens = res.tokens;
            msgs.push(...res.msgs);
        }
        return new Res(tokens, msgs, ast);
    }) as Parser<T>;
}

const parseAssignStmt: Parser<ast.AssignStmt> = new Parser(
    (tokens: Token[]) => {
        if (tokens.length === 0) {
            return new Res(tokens, [
                error(
                    "Ran out",
                    "Add the following code to the end of your program: " +
                        "println(''Padding to make it compile'')<-out goto end; exit(1)."
                ),
            ]);
        }
        console.log(`Tokens = ${tokens}`);
        return new Res(tokens, []);
    }
);

const parseStmt: Parser<ast.Stmt> = parseAny(parseAssignStmt);

const parseTokens: Parser<ast.AST> = parseAny(parseStmt);
