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
    DrawButton(1885, 145, 90, 90, "", "#fff", "Icons/Book.png", TextGet("Read"));
}

function LibraryClick() {
    // Exit Button
    if (MouseIn(1885, 25, 90, 90)) CommonSetScreen("Room", "MainHall");
    // Read a book
    else if (MouseIn(1889, 145, 90, 90)) LibrarySetBookSelectionScreen();
    // Librarian
    if (MouseIn(500, 0, 500, 1000)) CharacterSetCurrent(LibraryLibrarian);
}

function LibrarySetBookSelectionScreen() {
    BookSelectionReturn = () => CommonSetScreen("Room", "Library");
    CommonSetScreen("Character", "BookSelection");
}

function LibraryLoadNPCLibrarian() {
    LibraryLibrarian = CharacterLoadNPC("NPC_Library_Librarian");
    CharacterAppearanceFullRandom(LibraryLibrarian);
    InventoryWear(LibraryLibrarian, `Glasses${CommonRandomInt(1, 4)}`, "Glasses");
}