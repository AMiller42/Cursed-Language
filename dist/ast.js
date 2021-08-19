"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VarRef = exports.BoolLiteral = exports.NumLiteral = exports.StringLiteral = exports.Literal = exports.Expr = exports.AST = void 0;
var AST = /** @class */ (function () {
    function AST() {
    }
    return AST;
}());
exports.AST = AST;
var Expr = /** @class */ (function (_super) {
    __extends(Expr, _super);
    function Expr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Expr;
}(AST));
exports.Expr = Expr;
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super);
    function Literal(value, token) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.token = token;
        return _this;
    }
    return Literal;
}(Expr));
exports.Literal = Literal;
var StringLiteral = /** @class */ (function (_super) {
    __extends(StringLiteral, _super);
    function StringLiteral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StringLiteral;
}(Literal));
exports.StringLiteral = StringLiteral;
var NumLiteral = /** @class */ (function (_super) {
    __extends(NumLiteral, _super);
    function NumLiteral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumLiteral;
}(Literal));
exports.NumLiteral = NumLiteral;
var BoolLiteral = /** @class */ (function (_super) {
    __extends(BoolLiteral, _super);
    function BoolLiteral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BoolLiteral;
}(Literal));
exports.BoolLiteral = BoolLiteral;
var VarRef = /** @class */ (function () {
    function VarRef() {
    }
    return VarRef;
}());
exports.VarRef = VarRef;
