"use strict";

var LibraryBackground = "Library";

let LibraryLibrarian = null;

function LibraryLoad() {
    if (!LibraryLibrarian) {
        LibraryLoadNPCLibrarian();
    }
}

function LibraryRun() {
    DrawCharacter(Player, 0, 0, 1);
    DrawCharacter(LibraryLibrarian, 500, 0, 1);

    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));
}

function LibraryClick() {
    // Exit Button
    if (MouseIn(1885, 25, 90, 90)) CommonSetScreen("Room", "MainHall");
    // Librarian
    if (MouseIn(500, 0, 500, 1000)) CharacterSetCurrent(LibraryLibrarian);
}

function LibraryLoadNPCLibrarian() {
    LibraryLibrarian = CharacterLoadNPC("NPC_Library_Librarian");
    CharacterAppearanceFullRandom(LibraryLibrarian);
    InventoryWear(LibraryLibrarian, `Glasses${CommonRandomInt(1, 4)}`, "Glasses");
}