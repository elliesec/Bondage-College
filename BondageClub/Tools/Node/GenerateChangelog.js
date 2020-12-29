const fs = require("fs");
const path = require("path");
const util = require("util");
const cheerio = require("cheerio");
const marked = require("marked");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const bcRoot = path.resolve(__dirname, "../..");

generateChangelogs();

async function generateChangelogs() {
    const sourceMarkdownPath = path.join(bcRoot, "CHANGELOG.md");
    const sourceMarkdown = await readFileAsync(sourceMarkdownPath, "utf-8");
    const startIndex = sourceMarkdown.search(/^## \[R[0-9a-zA-Z]+]/m);
    const trimmedMarkdown = sourceMarkdown.substring(startIndex);
    const versions = parseVersionsFromMarkdown(sourceMarkdown);
    await Promise.all([
        generateChangelogHtml(trimmedMarkdown, versions),
        generateBookMarkdown(trimmedMarkdown, versions)
    ]);
}

async function generateChangelogHtml(trimmedMarkdown, versions) {
    const htmlPath = path.join(bcRoot, "changelog.html");
    const sourceHtml = await readFileAsync(htmlPath, "utf-8");
    const renderedMarkdown = marked(trimmedMarkdown);
    const $ = cheerio.load(sourceHtml);
    $("body").empty()
        .append("<h1>Bondage Club - Changelog</h1>")
        .append("<h2>Table of Contents</h2>")
        .append(generateHtmlToc(versions))
        .append(renderedMarkdown);

    await writeFileAsync(htmlPath, $.root().html());
}

async function generateBookMarkdown(trimmedMarkdown, versions) {
    const bookPath = path.join(bcRoot, "Assets/Books/Markdown/BondageClubThroughTheAges.md");
    const bookMarkdown = "# Bondage Club Through The Ages\n\n"
        + "***\n\n"
        + "_A brief history of the Bondage Club_\n\n"
        + "##### Table of Contents\n\n"
        + `${generateMarkdownToc(versions)}\n\n`
        + "***\n\n"
        + `## Introduction\n\n`
        + "The Bondage Club has adapted and evolved over the years as it has welcomed more and more members through its doors, with an ever-growing variety of interests and kinks. New rooms in the club have been built, existing rooms and areas expanded, and the club's services have improved and increased in number" +
        ".\n\n"
        + "This book has been compiled to record the history of the club, and to recognise the members and benefactors that have helped it to grow into the esteemed establishment that it is today.\n\n"
        + trimmedMarkdown.replace(/^## (\[R[0-9A-Z]+])/gim, "***\n\n## $1");

    await writeFileAsync(bookPath, bookMarkdown);
}

function generateMarkdownToc(versions) {
    return versions.map((version, i) => {
        return `* [${version}${i === 0 ? " (Current)" : ""}](#${version.toLowerCase()})`;
    }).join("\n");
}

function generateHtmlToc(versions) {
    const $ = cheerio.load("<ul></ul>");
    versions.forEach((version, i) => {
        $("ul").append(`<li><a href="#${version.toLowerCase()}">${version}${i === 0 ? " (Current)" : ""}</a></li>`);
    });
    return $.root().html();
}

function parseVersionsFromMarkdown(sourceMarkdown) {
    const matches = sourceMarkdown.match(/^## \[R[0-9A-Z]+]/gim);
    return matches.map((match) => match.match(/\[(R[0-9A-Z]+)]/)[1]);
}
