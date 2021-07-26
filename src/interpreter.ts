import * as ast from './ast'
import { parse } from './parser'

export function interpret(code: string, flags={}) {
  let ast = parse(code)
  execAST(ast, flags)
}

function execAST(ast: ast.AST, flags={}) {

}
