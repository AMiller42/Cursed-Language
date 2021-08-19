// import * as interpreter from './dist/interpreter'
// const interpreter = require('./dist/interpreter');

function getFlags() {
    return [];
}

function getInputs() {
    return [];
}

function getCode() {
    return document.getElementById("codebox").firstChild.textContent;
}

function linkify() {
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

function execute() {
    const flags = "";
    const code = document.getElementById("codebox");
    const res = interpreter.interpret(code, flags);
    alert(res);
}
