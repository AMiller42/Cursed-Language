(function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b})()({1:[function(a,b,c){"use strict";function d(a,b){void 0===b&&(b={})}c.__esModule=!0,c.interpret=void 0;var e=a("./parser");c.interpret=function(a,b){void 0===b&&(b={});var c=e.parse(a);d(c,b)}},{"./parser":3}],2:[function(a,b,c){"use strict";function d(a){for(var b,c=/[\d\.]/,d=/[\w\$\t;]/,g=[],h="";a;)if(b=a[0],a=a.slice(1),"'"==b){if("'"==a[0]){for(a=a.slice(1),h="";a&&"''"!=a.slice(0,2);)h+=a[0],a=a.slice(1);a=a.slice(2),g.push(new f(e.STRING,h))}}else if(c.test(b)){for(h=b;a&&c.test(a[0]);)h+=a[0],a=a.slice(1);g.push(new f(e.NUMBER,h))}else if("<-".includes(b))h=b,["<-","->"].includes(b+a[0])?(h+=a[0],a=a.slice(1),g.push(new f(e.VAR_SET,h))):g.push(new f(e.GENERAL,h));else if(":"==b){for(h="";a&&":"!=a[0];)h+=a[0],a=a.slice(1);a=a.slice(1),g.push(new f(e.LABEL,h))}else if("\u037E"==b){for(h="";a&&"\u037E"!=a[0];)h+=a[0],a=a.slice(1);a=a.slice(1),g.push(new f(e.DESTINATION,h))}else if(d.test(b)){for(h=b;a&&d.test(a[0]);)h+=a[0],a=a.slice(1);g.push(new f(e.WORD,h))}else if("\n"==b){for(h="";a&&"\u200B"==a[0];)h+="\u200B",a=a.slice(1);g.push(new f(e.INDENT,h))}else if("#"==b)for(;a&&"\n"!=a[0];)a=a.slice(1);else" "!=b&&g.push(new f(e.GENERAL,b));return g}c.__esModule=!0,c.tokenise=c.Token=void 0;var e;(function(a){a[a.STRING=0]="STRING",a[a.NUMBER=1]="NUMBER",a[a.VAR_SET=2]="VAR_SET",a[a.LABEL=3]="LABEL",a[a.DESTINATION=4]="DESTINATION",a[a.WORD=5]="WORD",a[a.INDENT=6]="INDENT",a[a.GENERAL=7]="GENERAL",a.RPAREN=")",a.LPAREN="(",a.RSQUARE="]",a.LSQUARE="[",a.RCURLY="}",a.LCURLY="{",a.LT_ARROW="<-",a.RT_ARROW="->",a.EQ="=",a.LT="<",a.GT=">",a.PLUS="+",a.MINUS="-",a.STAR="*",a.SLASH="/"})(e||(e={}));var f=function(){function a(a,b){var c=this;this.equals=function(a){return c.name==a.name&&c.value==a.value},this.name=a,this.value=b}return a.prototype.toString=function(){return this.name+": "+(this.name==e.INDENT?this.value.length:this.value)},a.prototype.repr=function(){return"Token(\""+this.name+"\", \""+this.value+"\")"},a}();c.Token=f,c.tokenise=d},{}],3:[function(a,b,c){"use strict";function d(){return null}c.__esModule=!0,c.parse=void 0;var e=a("./lexer");c.parse=function(a){return d(e.tokenise(a))}},{"./lexer":2}]},{},[1]);
//# sourceMappingURL=bundle.js.map