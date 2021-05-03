"use strict";

var BookBackground = "Book";

let BookReturn = null;
let BookCurrent = null;
let BookMarkdown = null;
let BookDefaultMarkedRenderer = null;

const BookRenderer = {
	heading(text, level, raw, slugger) {
		const slug = slugger.slug(text).trim().replaceAll(/(^-+|-+$)/g, "");
		return `
            <h${level}>
              <a id="${slug}" class="anchor" href="#${slug}"></a>
              ${text}
            </h${level}>`;
	},
	link(href, title, text) {
		const externalLink = typeof href === "string" && !href.startsWith("#");
		let linkText = BookDefaultMarkedRenderer.link(href, title, text);
		if (externalLink) {
			linkText = linkText.replace(/^<a/, "<a target=\"_blank\"");
		}
		return linkText;
	},
	image(href, title, text) {
		if (/^\.\.?\//.test(href)) {
			href = `Books/Markdown/${BookCurrent.name}/${href}`;
		}
		return `<img src="${href}" title=${title} alt=${text}/>`;
	},
};

function BookLoad() {
	location.hash = "";
	const bookBox = ElementCreateDiv("BookBox");
	if (BookCurrent) {
		Promise.all([BookLoadMarked(), BookLoadCurrent()]).then(() => {
			marked.use({ renderer: BookRenderer });
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
	location.hash = "";
}

function BookLoadMarked() {
	if (typeof window.marked === "function") {
		return Promise.resolve();
	} else {
		return CommonLoadScript("https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.7/marked.min.js")
			.then(() => (BookDefaultMarkedRenderer = new marked.Renderer()));
	}
}

function BookLoadCurrent() {
	return new Promise((resolve) => {
		CommonGet(`Books/Markdown/${BookCurrent.name}/${BookCurrent.name}.md`, (xhr) => {
			BookMarkdown = xhr.responseText;
			resolve(BookMarkdown);
		});
	});
}
