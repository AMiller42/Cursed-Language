export class AST {

}

export class Expr extends AST {

}

export class Literal<T> extends Expr {
  readonly value: T
  readonly token: Token

  constructor(value: T, token: Token) {
    super()
    this.value = value
    this.token = token
  }
}

export class StringLiteral extends Literal<string> { }

export class NumLiteral extends Literal<number> { }

export class BoolLiteral extends Literal<boolean> { }

export class VarRef {
  readonly token: Token
}

export class Token {
  readonly text: string
  readonly tokenType: TokenType
}

export enum TokenType {
  STRING_LITERAL,
  NUM_LITERAL,
  IDENTIFIER,
  OPERATOR,
  OTHER,
  LPAREN = "(",
  RPAREN = ")",
  GT = ">",
  LT = "<",
  EQGT = "=>",
  LTEQ = "<=",
  EQ = "="
}
