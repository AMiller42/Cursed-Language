import * as ast from './ast'

export function tokenize(code: string): [ast.Token] {
  return null //todo
}

function parseTokens(tokens: [ast.Token]): ast.AST {
  return null //todo
}

export function parse(code: string): ast.AST {
  return parseTokens(tokenize(code))
}