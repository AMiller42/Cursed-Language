# Ｃｕｒｓｅｄ

Try Ｃｕｒｓｅｄ out today in the [online interpreter](https://amiller42.github.io/Cursed-Language/)! (Disclaimer: Doesn't work yet; it'll work tomorrow.)

Example program to demonstrate syntax: [Ｃｕｒｓｅｄ FizzBuzz](https://gist.github.com/AMiller42/7219aaca47cc01753084635c49d3b521)

## Confirmed <s>Bugs</s> Features

**_Note: Potential features / features with missing details are marked with `(?)`_**

-   There will be a golfy syntax and readable syntax for most things, which can be mixed together
-   `Switch` statements instead of `if` statements, but instead of `break`, you have to use `goto`
-   `While` loops that confirm that you actually want to break the loop
-   `Four` loops that always execute four times
-   Labels are set with `;label;`
-   There are `goto ;label;` statements, which you can return from by using `goto ;camefrom;`
-   Dysfunctional Functions™ (Not sure what that means yet, but with a name like that, I've got to include it.)
-   All variables are global
-   `\uxxxx` anywhere gets converted to UTF-16 character before execution; if part of it is missing, it gets padded with random characters `0-F`
-   No rng commands, instead you use the previous feature or a delimiter that marks code as optional so it gets executed 50% of the time
-   Output is just a variable, and you produce output by setting that variable. However, to reduce ambiguity, any variable with `out` in the name will work
-   Input is also a variable, which you retrieve a value from. Again, any variable with `in` in the name will work
-   Use `->` to set variables or retrieve from variables. You can also use `<-`
-   Strings are delimited with double single quotes: `''Hello World''`
-   Arrays are delimited with single double quotes, with pipes separating values: `"1|2|3"`
-   Arrays can have negative and decimal indexes, and they're 1-indexed, i.e. `a"-2", a"-1", a"1", a"2"` will all work, but `a"0"` will just segfault
-   All keywords can be used as variables, rendering the function of the keyword inoperable
-   Like any keyword, you can try to set `null` like a variable, but the value will be trashed
-   Like keywords, you can also use numbers as variables, including decimals
-   Escape character is `!`, but to escape `!` characters, you have to use `\`
-   Brackets are mirrored, e.g. `}]) ([{`

-   Strange automatic typecasting / overloading, e.g.
    -   `[] -> 0`
    -   `[[]] -> 1`
    -   `null -> 0`
    -   `[null] -> 1`
    -   etc.

## Examples

**Print "Hello, World!"**

`''Hello, World\!''->out`<br><br>

**Truth-Machine**

`x<-in})x(x->out{`<br><br>

**Cat Program**

`in->out`<br><br>

**Define an Array of Strings**

`"''Hello''|''World\!''"`













<!-- Not a rickroll: https://www.youtube.com/watch?v=EjtBZhRiKeI -->
