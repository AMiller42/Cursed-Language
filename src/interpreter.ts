import * as ast from "./ast";
import { parse } from "./parser";

export function interpret(
    code: string,
    inputs: string[] = [],
    flags: string[] = []
) {
    let ast = parse(code);
    execAST(ast, inputs, flags);
}

function execAST(ast: ast.AST, inputs: string[], flags: string[]) {}
