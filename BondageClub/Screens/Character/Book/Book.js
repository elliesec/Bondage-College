"use strict";

var BookBackground = "Book";

let BookReturn = null;
let BookCurrent = null;
let BookMarkdown = null;

function BookLoad() {
    const bookBox = ElementCreateDiv("BookBox");
    if (BookCurrent) {
        Promise.all([BookLoadMarked(), BookLoadCurrent()]).then(() => {
            bookBox.innerHTML = marked(BookMarkdown);
        });
    }
}

function BookRun() {
    ElementPositionFix("BookBox", 36, 500, 40, 1000, 890);
    document.getElementById("BookBox").style.fontSize = null;
    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));
}

function BookClick() {
    // Exit Button
    if (MouseIn(1885, 25, 90, 90)) BookExit();
}

function BookExit() {
    ElementRemove("BookBox");
    if (typeof BookReturn === "function") {
        BookReturn();
    }
    BookCurrent = null;
    BookReturn = null;
}

function BookLoadMarked() {
    return new Promise((resolve) => {
        if (typeof window.marked === "function") {
            resolve(marked);
        } else {
            const script = document.createElement("script");
            script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.7/marked.min.js");
            script.onload = () => resolve(window.marked);
            document.body.appendChild(script);
        }
    });
}

function BookLoadCurrent() {
    return new Promise((resolve) => {
        CommonGet(`Assets/Books/Markdown/${BookCurrent.name}.md`, (xhr) => {
            BookMarkdown = xhr.responseText;
            resolve(BookMarkdown);
        });
    });
}