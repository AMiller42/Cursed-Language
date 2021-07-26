# Ｃｕｒｓｅｄ

## Confirmed <s>Bugs</s> Features

***Note: Potential features / features with missing details are marked with `(?)`***

* `Switch` statements instead of `if` statements, but instead of `break`, you have to use `goto`
* While loops that confirm that you actually want to break the loop
* Labels are set with `;label;`
* There are `goto ;label;` statements, which you can return from by using `goto ;camefrom;`
* Dysfunctional Functions™ (Not sure what that means yet, but with a name like that, I've got to include it.)
* All variables are global
* `\uxxxx` anywhere gets converted to UTF-16 character before execution; if part of it is missing, it gets padded with random characters `0-F`
* No rng commands, instead you use the previous feature or a delimiter that marks code as optional so it gets executed 50% of the time
* Arrays can have negative and fractional(?) indexes, and they're 1-indexed, e.g. `a[-2], a[-1], a[1], a[2]`, and `a[0]` will just segfault
* All lines must be an even length(?), and no longer than (?) characters; if lines are longer, they will be silently truncated
* Output is just a variable, and you produce output by setting that variable. However, to reduce ambiguity, any variable with `out` in the name will work
* Input is also a variable, which you retrieve a value from. Again, any variable with `in` in the name will work
* Use `->` to set variables or retrieve from variables. You can also use `<-`
* Strings are delimited with double single quotes: `''Hello World''`
* Arrays are delimited with single double quotes, with pipes separating values: `"1|2|3"`
* All keywords can be used as variables, rendering the function of the keyword inoperable
* Like any keyword, you can try to set `null` like a variable, but the value will be trashed
* Escape character in strings is `!`, but to escape `!` characters, you have to use `\`
* Brackets are mirrored, e.g. `}])> <([{`

* Strange automatic typecasting / overloading, e.g.
	* `[] -> 0`
	* `[[]] -> 1`
	* `null -> 0`
	* `[null] -> 1`

### Examples

**Print "Hello, World!"**

`''Hello, World\!''->out`<br><br>

**Truth-Machine**

`x<-in:x:x->out:`<br><br>

**Cat Program**

`in->out`<br><br>

**Define an Array of Strings**

`"''Hello''|''World\!''"`




















<!-- Not a rickroll: https://www.youtube.com/watch?v=EjtBZhRiKeI -->
