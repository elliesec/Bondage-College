"use strict";

var LibraryBackground = "Library";

let LibraryLibrarian = null;

function LibraryLoad() {
    LibraryLibrarian = CharacterLoadNPC("NPC_Library_Librarian");
}

function LibraryRun() {
    DrawCharacter(Player, 0, 0, 1);
    DrawCharacter(LibraryLibrarian, 500, 0, 1);

    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));
}

function LibraryClick() {
    if (MouseIn(1885, 25, 90, 90)) CommonSetScreen("Room", "MainHall");
}