import * as interpreter from "./interpreter";

console.log("Here!");

/******************************* BEGIN HELPERS *******************************/
function getFlags(): string[] {
    return [];
}

function getInputs(): string[] {
    return [];
}

function getCode(): string {
    return document.getElementById("codebox").innerText;
}

//From https://stackoverflow.com/a/35385518
function htmlToElement(html: string) {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
/******************************** END HELPERS ********************************/

export function linkify(): void {
    const flags = getFlags().join(" ");
    const input = getInputs().join("\n");
    const code = getCode();
    const site = window.location.origin + window.location.pathname;
    const encodedFlags = `flags=${encodeURIComponent(flags)}`;
    const encodedInput = `input=${encodeURIComponent(input)}`;
    const encodedCode = `code=${encodeURIComponent(code)}`;
    const link = `${site}?${encodedFlags}&${encodedInput}&${encodedCode}`;
    const response = prompt("Link\n created.\n  If\n   you\n    want\n     to\n      copy\n       the\n        link,\n         type\n          \"yez plez\"");
    if (response === "yez plez") {
        navigator.clipboard.writeText(link).then(function() {
          alert('Copied');
        }, function(err) {
          alert("Oof, no copy. Error:\n\"" + err + "\"\n\nHere's the link, to manually copy:\n" + link);
        });
    }
}

export function execute(): void {
    const flags = getFlags();
    const inputs = getInputs();
    const code = getCode();
    const res = interpreter.interpret(code, inputs, flags);
    alert(res);
}

function popupJohnvertise() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    console.log(screenHeight, screenWidth);

    // set size of the popup with a random multiplier
    const adSize = 1.25 - Math.random();
    const adWidth = Math.round(732 * adSize);
    const adHeight = Math.round(94 * adSize);

    // set a random position for the ad
    let offsetX = "" + Math.floor(Math.random() * (screenWidth - adWidth));
    const offsetY = Math.floor(Math.random() * (screenHeight - adHeight));

    // if the ad is wider than the screen, get rid of the x offset
    offsetX = adWidth >= screenWidth ? "" : `right:${offsetX}px;`;

    // spawn the ad
    const x = `<img src="./img/x.gif" style="height: 12px; width: 12px; cursor:grab;" onclick="this.parentElement.remove();"/>`;
    const advert = `<iframe src="https://john.mondecitronne.com/embed?ref=http://amiller42.github.io/Cursed-Language"
        style="margin-left:auto; display:block; max-width:${adWidth}px; width:100%; height:${adHeight}px; border:none;"
    ></iframe>`;
    const html = `<div style="position:fixed; top:${offsetY}px; ${offsetX} height:${adHeight}px; width:${adWidth}px;" id="popup">
            ${x}${advert}
        </div>`;
    document.body.appendChild(htmlToElement(html));

    // wait anywhere from 15-90 seconds to spawn another popup
    setTimeout(popupJohnvertise, Math.floor(Math.random() * 75000 + 15000));
}

// wait anywhere from 2-10 seconds before the first popup
setTimeout(popupJohnvertise, Math.floor(Math.random() * 8000 + 2000));

//Set event listeners here because the functions can't be accessed from
//the HTML directly for some reason.
//TODO figure out a way to get around that ^
window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("run").onclick = execute;
    document.getElementById("link").onclick = linkify;
});
