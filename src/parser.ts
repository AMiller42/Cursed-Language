import * as ast from "./ast";
import * as lexer from "./lexer";

function parseTokens(tokens: lexer.Token[]): ast.AST {
    return null; //todo
}

export function parse(code: string): ast.AST {
    return parseTokens(lexer.tokenise(code));
}
