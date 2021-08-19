import * as interpreter from './interpreter';

console.log('Here!')

/******************************* BEGIN HELPERS *******************************/
function getFlags(): string[] {
    return [];
}

function getInputs(): string[] {
    return [];
}

function getCode(): string {
    return document.getElementById("codebox").firstChild.textContent;
}
/******************************** END HELPERS ********************************/

export function linkify(): void {
    const flags = getFlags().join(" ");
    const input = getInputs().join("\n");
    const code = getCode();
    const site = window.location.origin;
    const encodedFlags = `flags=${encodeURIComponent(flags)}`;
    const encodedInput = `input=${encodeURIComponent(input)}`;
    const encodedCode = `code=${encodeURIComponent(code)}`;
    const link =
        `${site}/?${encodedFlags}&${encodedInput}&${encodedCode}`;
    alert(link);
}

export function execute(): void {
    const flags = getFlags();
    const inputs = getInputs();
    const code = getCode();
    const res = interpreter.interpret(code, inputs, flags);
    alert(res);
}

//Set event listeners here because the functions can't be accessed from
//the HTML directly for some reason.
//TODO figure out a way to get around that ^
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("run").onclick = execute;
    document.getElementById("link").onclick = linkify;
});
