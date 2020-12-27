"use strict";

var BookBackground = "Book";

let BookReturn = null;

function BookLoad() {
    console.log("BookLoad");
    ElementCreateDiv("BookBox");
    ElementPositionFix("BookBox", 36, 500, 40, 1000, 890);
}

function BookRun() {
    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));
}

function BookClick() {
    // Exit Button
    if (MouseIn(1885, 25, 90, 90)) BookExit();
}

function BookExit() {
    if (typeof BookReturn === "function") {
        BookReturn();
        BookReturn = null;
    }
}