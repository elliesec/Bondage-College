"use strict";

var LibraryBackground = "Library";

let LibraryCharacter = null;
let LibraryLibrarian = null;

function LibraryLoad() {
    const roll = Math.random();
    if (roll < 0.1) {
        LibraryCharacter = LibraryLoadNPCLibrarian();
    } else {
        LibraryCharacter = null;
    }
}

function LibraryRun() {
    DrawCharacter(Player, 0, 0, 1);

    if (LibraryCharacter) {
        DrawCharacter(LibraryCharacter, 500, 0, 1);
    }

    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));
    DrawButton(1885, 145, 90, 90, "", "#fff", "Icons/Book.png", TextGet("Read"));
}

function LibraryClick() {
    // Exit Button
    if (MouseIn(1885, 25, 90, 90)) CommonSetScreen("Room", "MainHall");
    // Read a book
    else if (MouseIn(1889, 145, 90, 90)) LibrarySetBookSelectionScreen();
    // Librarian
    if (LibraryCharacter && MouseIn(500, 0, 500, 1000)) CharacterSetCurrent(LibraryCharacter);
}

function LibrarySetBookSelectionScreen() {
    BookSelectionReturn = () => CommonSetScreen("Room", "Library");
    CommonSetScreen("Character", "BookSelection");
}

function LibraryLoadNPCLibrarian() {
    if (!LibraryLibrarian) {
        LibraryLibrarian = CharacterLoadNPC("NPC_Library_Librarian");
        LibraryLibrarian.Name = "Librarian " + LibraryLibrarian.Name;
        CharacterAppearanceFullRandom(LibraryLibrarian);
        InventoryWear(LibraryLibrarian, `Glasses${CommonRandomInt(1, 4)}`, "Glasses");
    }
    return LibraryLibrarian;
}