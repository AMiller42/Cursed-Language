import * as interpreter from './dist/interpreter'

function linkify(code, input, flags) {
    const encodedFlags = `flags={encodeURIComponent(flags)}`;
    const encodedInput = `input={encodeURIComponent(input)}`;
    const encodedCode = `code={encodeURIComponent(code)}`;
    const link =
        `{window.location.origin}/?{encodedFlags}&{encodedInput}&{encodedCode}`;
    alert(link);
}

function execute(code, flags) {
    const res = interpreter.interpret(code, flags);
    alert(res);
}
