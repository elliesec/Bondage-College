"use strict";

var BookSelectionBackground = "BookShelves";

let BookSelectionReturn = null;
let BookSelectionAvailableBooks = [];
let BookSelectionTags = [];
let BookSelectionFilteredBooks = [];
let BookSelectionCurrentPage = [];
let BookSelectionPageCount = 0;
let BookSelectionPageNumber = 0;

const BookSelectionBoxWidth = 508;
const BookSelectionBoxHeight = 380;
const BookSelectionFilterMemo = CommonMemoize(BookSelectionFilter);

function BookSelectionLoad() {
    BookSelectionFilterMemo.clearCache();
}

function BookSelectionRun() {
    BookSelectionCalculateState();

    DrawTextFit(TextGet("Tags"), 200, 70, 350, "#fff", "#000");

    Object.keys(BookTag).forEach((key, i) => {
        const tag = BookTag[key];
        const color = BookSelectionTags.includes(tag) ? "#cfffcf" : "#fff";
        DrawButton(25, 140 + 90 * i, 350, 65, BookTags.get(tag), color, null, null, false);
    });

    if (BookSelectionPageCount > 1) {
        DrawButton(1770, 25, 90, 90, "", "#fff", "Icons/Next.png", TextGet("Next"));
    }
    DrawButton(1885, 25, 90, 90, "", "#fff", "Icons/Exit.png", TextGet("Exit"));

    BookSelectionCurrentPage.forEach((book, i) => {
        const xOffset = 401 + (BookSelectionBoxWidth + 25) * (i % 3);
        const yOffset = 140 + (BookSelectionBoxHeight + 25) * Math.floor(i / 3);
        DrawButton(xOffset, yOffset, BookSelectionBoxWidth, BookSelectionBoxHeight, "", "#fff");
        DrawTextFit(book.title, xOffset + BookSelectionBoxWidth / 2, yOffset + 60, BookSelectionBoxWidth - 20, "#000", null, "bold");
        DrawRect(xOffset + 150, yOffset + 100, BookSelectionBoxWidth - 300, 1, "rgba(0, 0, 0, 0.35)");
        MainCanvas.font = `italic ${CommonGetFont(24)}`;
        DrawTextWrap(book.description, xOffset + 10, yOffset + 120, BookSelectionBoxWidth - 20, BookSelectionBoxHeight - 265, "rgba(0, 0, 0, 0.75)", null, 3);
        DrawRect(xOffset + 150, yOffset + BookSelectionBoxHeight - 105, BookSelectionBoxWidth - 300, 1, "rgba(0, 0, 0, 0.35)");
        MainCanvas.font = CommonGetFont(20);
        DrawText("by", xOffset + BookSelectionBoxWidth / 2, yOffset + BookSelectionBoxHeight - 80, "#000");
        DrawTextFit(book.author, xOffset + BookSelectionBoxWidth / 2, yOffset + BookSelectionBoxHeight - 40, BookSelectionBoxWidth - 20, "#000", null, null, 24);
    });
}

function BookSelectionClick() {
    // Exit Button
    if (MouseIn(1885, 25, 90, 90)) BookSelectionExit();
    // Next Page
    else if (BookSelectionPageCount > 1 && MouseIn(1770, 25, 90, 90)) BookSelectionNextPage();
    else if (MouseXIn(25, 350)) {
        Object.keys(BookTag).some((key, i) => {
            if (MouseYIn(140 + 90 * i, 65)) {
                const tag = BookTag[key];
                if (BookSelectionTags.includes(tag)) {
                    BookSelectionTags = BookSelectionTags.filter(t => t !== tag);
                } else {
                    BookSelectionTags = BookSelectionTags.concat(tag);
                }
                return true;
            }
        });
    } else {
        BookSelectionCurrentPage.some((book, i) => {
            const xOffset = 401 + (BookSelectionBoxWidth + 25) * (i % 3);
            const yOffset = 140 + (BookSelectionBoxHeight + 25) * Math.floor(i / 3);
            if (MouseIn(xOffset, yOffset, BookSelectionBoxWidth, BookSelectionBoxHeight)) {
                BookReturn = () => CommonSetScreen("Character", "BookSelection");
                BookCurrent = book;
                CommonSetScreen("Character", "Book");
            }
        });
    }
}

function BookSelectionExit() {
    if (typeof BookSelectionReturn === "function") {
        BookSelectionReturn();
    }
    BookSelectionReturn = null;
    BookSelectionFilterMemo.clearCache();
    BookSelectionTags = [];
    BookSelectionAvailableBooks = [];
}

function BookSelectionCalculateState() {
    const filterData = BookSelectionFilterMemo(BookSelectionAvailableBooks, BookSelectionTags, BookSelectionPageNumber);
    BookSelectionFilteredBooks = filterData.filteredBooks;
    BookSelectionPageCount = filterData.pageCount;
    BookSelectionPageNumber = filterData.pageNumber;
    BookSelectionCurrentPage = filterData.currentPage;
}

function BookSelectionFilter(availableBooks, tags, pageNumber) {
    let filteredBooks;
    if (!tags || !tags.length) {
        filteredBooks = availableBooks.slice();
    } else {
        filteredBooks = availableBooks.filter((book) => {
            return tags.every((tag) => book.tags.includes(tag));
        });
    }
    const pageCount = Math.ceil(filteredBooks.length / 6);
    if (pageNumber >= pageCount || pageNumber < 0) pageNumber = 0;
    const currentPage = filteredBooks.slice(pageNumber * 6, pageNumber * 6 + 6);
    return {filteredBooks, pageCount, pageNumber, currentPage};
}

function BookSelectionNextPage() {
    BookSelectionPageNumber = (BookSelectionPageNumber + 1) % BookSelectionPageCount;
    BookSelectionCalculateState();
}
