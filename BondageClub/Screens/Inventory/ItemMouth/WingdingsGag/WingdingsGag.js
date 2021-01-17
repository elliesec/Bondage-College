const WingdingsLookup = {
	a: "♋",
	b: "♌",
	c: "♍",
	d: "♎",
	e: "♏",
	f: "♐",
	g: "♑",
	h: "♒",
	i: "♓",
	j: "🙰",
	k: "🙵",
	l: "●",
	m: "❍",
	n: "■",
	o: "□",
	p: "◻",
	q: "❑",
	r: "❒",
	s: "⬧",
	t: "⧫",
	u: "◆",
	v: "❖",
	w: "⬥",
	x: "⌧",
	y: "⍓",
	z: "⌘",
	A: "✌",
	B: "👌︎",
	C: "👍︎",
	D: "👎︎",
	E: "☜",
	F: "☞",
	G: "☝",
	H: "☟",
	I: "🖐",
	J: "☺",
	K: "😐",
	L: "☹",
	M: "💣",
	N: "☠",
	O: "🏳",
	P: "🏱",
	Q: "✈",
	R: "☼",
	S: "💧",
	T: "❄",
	U: "🕆",
	V: "✞",
	W: "🕈",
	X: "✠",
	Y: "✡",
	Z: "☪",
	"!": "🖉",
	"\"": "✂",
	"#": "✁",
	"$": "👓︎",
	"%": "🕭",
	"&": "🕮",
	",": "📪",
	".": "📬",
	"?": "✍",
};

function InventoryItemMouthWingdingsGagLoad() {
	const oldServerSend = ServerSend;
	ServerSend = function (Message, Data) {
		if (Message === "ChatRoomChat" && Data && Data.Type === "Chat" && Data.Content) {
			let newString = "";
			for (let i = 0; i < Data.Content.length; i++) {
				const char = Data.Content[i];
				newString += (WingdingsLookup[char] || char);
			}
			Data.Content = newString;
			console.log(Data.Content);
		}
		oldServerSend(Message, Data);
	};
	DialogLeave();
}

function InventoryItemMouthWingdingsGagDraw() {
	DialogLeave();
}
