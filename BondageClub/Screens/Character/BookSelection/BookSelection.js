"use strict";

var BookSelectionBackground = "WoodTable";

let BookSelectionReturn = null;

function BookSelectionLoad() {
    console.log("BookSelectionLoad");
}

function BookSelectionRun() {
    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));
    DrawTextFit(TextGet("Tags"), 200, 70, 350, "#fff");

    Object.keys(BookTag).forEach((key, i) => {
        DrawButton(25, 140 + 90 * i, 350, 65, BookTags.get(BookTag[key]), "#fff", null, null, false);
    });
}

function BookSelectionClick() {
// Exit Button
    if (MouseIn(1885, 25, 90, 90)) BookSelectionExit()
    else {
        BookReturn = () => CommonSetScreen("Character", "BookSelection");
        CommonSetScreen("Character", "Book");
    }
}

function BookSelectionExit() {
    if (typeof BookSelectionReturn === "function") {
        BookSelectionReturn();
        BookSelectionReturn = null;
    }
}
