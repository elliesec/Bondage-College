"use strict";

/** 
 * Handles the value of a HTML element. It sets the value of the element when the Value parameter is provided or it returns the value when the parameter is omitted
 * @param {string} ID - The id of the element for which we want to get/set the value.
 * @param {string} [Value] - The value to give to the element (if applicable)
 * @returns {string | undefined} - The value of the element (When no value parameter was passed to the function)
 */
function ElementValue(ID, Value) {
	if (document.getElementById(ID) != null)
		if (Value == null)
			return document.getElementById(ID).value.trim();
		else
			document.getElementById(ID).value = Value;
}

// Returns the current HTML content of an element

/** 
 * Handles the content of a HTML element. It sets the content of the element when the Content parameter is provided or it returns the value when the parameter is omitted
 * @param {string} ID - The id of the element for which we want to get/set the value.
 * @param {string} [Content] - The content/inner HTML to give to the element (if applicable)
 * @returns {string | undefined} - The content of the element (When no Content parameter was passed to the function)
 */
function ElementContent(ID, Content) {
	if (document.getElementById(ID) != null)
		if (Content == null)
			return document.getElementById(ID).innerHTML;
		else
			document.getElementById(ID).innerHTML = Content;
}

/**
 * Creates a new text area element in the main document. Does not create a new element if there is already an existing one with the same ID
 * @param {string} ID - The id of the text area to create.
 * @returns {void} - Nothing
 */
function ElementCreateTextArea(ID) {
	if (document.getElementById(ID) == null) {
		var TextArea = document.createElement("TextArea");
		TextArea.setAttribute("ID", ID);
		TextArea.setAttribute("name", ID);
		TextArea.addEventListener("keydown", KeyDown);
		TextArea.className = "HideOnPopup";
		document.body.appendChild(TextArea);
	}
}

/** 
 * Creates a new text input element in the main document.Does not create a new element if there is already an existing one with the same ID
 * @param {string} ID - The id of the input tag to create.
 * @param {string} Type - Type of the input tag to create.
 * @param {string} Value - Value of the input tag to create.
 * @param {string} MaxLength - Maximum input tag of the input to create.
 * @returns {void} - Nothing
 */
function ElementCreateInput(ID, Type, Value, MaxLength) {
	if (document.getElementById(ID) == null) {
		var Input = document.createElement("input");
		Input.setAttribute("ID", ID);
		Input.setAttribute("name", ID);
		Input.setAttribute("type", Type);
		Input.setAttribute("value", Value);
		Input.setAttribute("maxlength", MaxLength);
		Input.setAttribute("onfocus", "this.removeAttribute('readonly');");
		Input.addEventListener("keydown", KeyDown);
		Input.className = "HideOnPopup";
		document.body.appendChild(Input);
	}
}

/**
 * Creates a dropdown element and adjusts it to the BC look and feel. In the HTML Code this will look like this:
 * <div> -- enclosing div used for css and postioning
 *     <select> -- the select statement with its options
 *         <option 1>
 *         <option n>
 *     </select>
 *     <div></div> -- the div representing the currently selected item
 *     <div> -- div for the various options
 *        <div>Option 1</div>
 *        <div>Option n</div>
 *     </div>
 * </div>
 * This construct is built automatically and ignores the original select statement. All the logic is handled by 
 * event handlers that are connected to the various divs. See comments in the code.
 * What this function cannot handle at the moment:
 * - The size is always set to 1
 * - Multiple selects are impossible
 * @param {string} ID - The name of the select item. The outer div will get this name, for positioning. The select
 * tag will get the name ID+"-select" 
 * @param {atring[]} Options - The list of options for the current select statement
 * @param {function} [ClickEventListener=null] - An event listener to be called, when the value of the drop down box changes
 * @returns {void} - Nothing
 */
function ElementCreateDropdown(ID, Options, ClickEventListener) {
	if (document.getElementById(ID) == null) {
		// Create the all enclosing <div>
		var CustomSelect = document.createElement("DIV");
		CustomSelect.setAttribute("class", "custom-select");
		CustomSelect.setAttribute("ID", ID);
		// Create the <select> tag
		var Select = document.createElement("select");
		Select.setAttribute("Name", ID + "-select");
		Select.setAttribute("ID", ID + "-select");
		// Create the <div> for the options
		var DivOptions = document.createElement("DIV");
		DivOptions.setAttribute("class", "select-items select-hide");
		// Create <option> and inner <div> tags for all Options in the list
		for (let i = 0; i < Options.length; i++) {
			var Option = document.createElement("option");
			var InnerDiv = document.createElement("DIV");

			Option.setAttribute("value", Options[i]);
			Option.innerHTML = Options[i];
			InnerDiv.innerHTML = Options[i];
			InnerDiv.addEventListener("click", function (e) {
				// when an item is clicked, update the original select box, and the selected item:
				var s = this.parentNode.parentNode.getElementsByTagName("select")[0]; // Representation of the select tag
				var h = this.parentNode.previousSibling; // Representation of the dropdown box
				for (let j = 0; j < s.length; j++) {
					if (s.options[j].innerHTML == this.innerHTML) {
						s.selectedIndex = j; // Fake the selection of an option
						h.innerHTML = this.innerHTML; // Update the drop down box
						var y = this.parentNode.getElementsByClassName("same-as-selected");
						for (let k = 0; k < y.length; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click(); // Evove a click events
				s.dispatchEvent(new Event("change")); // Evoke a onChange events
			});
			Select.appendChild(Option);
			DivOptions.appendChild(InnerDiv);
		}
		// Cretae the div for the selected item
		var SelectedItem = document.createElement("DIV");
		SelectedItem.setAttribute("class", "select-selected");
		SelectedItem.innerHTML = Select.options[0].innerHTML;
		SelectedItem.addEventListener("click", function (e) {
			//when the select box is clicked, close any other select boxes, and open/close the current select box:
			e.stopPropagation();
			ElementCloseAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
		});
		// add an event listener to the <select> tag
		if (ClickEventListener != null) Select.addEventListener("change", ClickEventListener)
		// Add alle the items to the enclosing <di>
		CustomSelect.appendChild(Select);
		CustomSelect.appendChild(SelectedItem);
		CustomSelect.appendChild(DivOptions);
		document.body.appendChild(CustomSelect);
		document.addEventListener("click", ElementCloseAllSelect);
	}
}

/**
 * Closes all select boxes in the current document, except the current select box
 * @param {object} elmnt - The select box to exclude from the closing
 * @returns {void} - Nothing
 */
function ElementCloseAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
	var arrNo = [];
	var y = document.getElementsByClassName("select-selected");
	for (let i = 0; i < y.length; i++) {
		if (elmnt == y[i]) arrNo.push(i);
	}
	var x = document.getElementsByClassName("select-items");
	for (let i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) x[i].classList.add("select-hide");
	}
}

/** 
 * Creates a new div element in the main document. Does not create a new element if there is already an existing one with the same ID
 * @param {string} ID - The id of the div tag to create.
 * @returns {void} - Nothing
 */
function ElementCreateDiv(ID) {
	if (document.getElementById(ID) == null) {
		var Div = document.createElement("div");
		Div.setAttribute("ID", ID);
		Div.setAttribute("name", ID);
		Div.addEventListener("keydown", KeyDown);
		Div.className = "HideOnPopup";
		document.body.appendChild(Div);
	}
}

/**
 * Removes an element from the main document
 * @param {string} ID - The id of the tag to remove from the document.
 * @returns {void} - Nothing
 */
function ElementRemove(ID) {
	if (document.getElementById(ID) != null)
		document.getElementById(ID).parentNode.removeChild(document.getElementById(ID));
}

/** 
 * Draws an existing HTML element at a specific position within the document. The element is "centered" on the given coordinates by dividing its height and width by two. 
 * @param {string} ElementID - The id of the input tag to (re-)position.
 * @param {number} X - Center point of the element on the X axis.
 * @param {number} Y - Center point of the element on the Y axis.
 * @param {number} W - Width of the element.
 * @param {number} H - Height of the element.
 * @returns {void} - Nothing
 */
function ElementPosition(ElementID, X, Y, W, H) {

	// Different positions based on the width/height ratio
	var Font;
	var Height;
	var Left;
	var Width;
	var Top;
	if (DrawScreenWidth <= DrawScreenHeight * 2) {
		Font = (DrawScreenWidth / 50);
		Height = H ? (H * DrawScreenWidth / 2000) : (Font * 1.15);
		Left = ((X - (W / 2)) * DrawScreenWidth / 2000);
		Width = (W * DrawScreenWidth / 2000) - 18;
		Top = (Y * DrawScreenWidth / 2000) + ((DrawScreenHeight * 2 - DrawScreenWidth) / 4) - (Height / 2);
	} else {
		Font = (DrawScreenHeight / 25);
		Height = H ? (H * DrawScreenHeight / 1000) : (Font * 1.15);
		Left = ((X - (W / 2)) * DrawScreenHeight / 1000) + (DrawScreenWidth - DrawScreenHeight * 2) / 2;
		Width = (W * DrawScreenHeight / 1000) - 18;
		Top = (Y * DrawScreenHeight / 1000) - (Height / 2);
	}

	// Sets the element style
	var E = document.getElementById(ElementID);
	Object.assign(E.style, {
		fontSize: Font + "px",
		fontFamily: "Arial",
		position: "absolute",
		left: Left + "px",
		top: Top + "px",
		width: Width + "px",
		height: Height + "px",
		display: "inline"
	});

}

/** 
 * Draws an existing HTML element at a specific position within the document. The element will not be centered on its given coordinates unlike the ElementPosition function. 
 * @param {string} ElementID - The id of the input tag to (re-)position.
 * @param {number} X - Starting point of the element on the X axis.
 * @param {number} Y - Starting point of the element on the Y axis.
 * @param {number} W - Width of the element.
 * @param {number} H - Height of the element.
 * @returns {void} - Nothing
 */
function ElementPositionFix(ElementID, Font, X, Y, W, H) {

	// Different positions based on the width/height ratio
	var Left;
	var Width;
	var Top;
	var Height;
	if (DrawScreenWidth <= DrawScreenHeight * 2) {
		Font = Font * DrawScreenWidth / 2000;
		Left = X * DrawScreenWidth / 2000;
		Width = W * DrawScreenWidth / 2000;
		Top = (Y * DrawScreenWidth / 2000) + ((DrawScreenHeight * 2 - DrawScreenWidth) / 4);
		Height = H * DrawScreenWidth / 2000;
	} else {
		Font = Font * DrawScreenHeight / 1000;
		Left = (X * DrawScreenHeight / 1000) + (DrawScreenWidth - DrawScreenHeight * 2) / 2;
		Width = W * DrawScreenHeight / 1000;
		Top = Y * DrawScreenHeight / 1000;
		Height = H * DrawScreenHeight / 1000;
	}

	// Sets the element style
	var E = document.getElementById(ElementID);
	Object.assign(E.style, {
		fontSize: Font + "px",
		fontFamily: "Arial",
		position: "absolute",
		left: Left + "px",
		top: Top + "px",
		width: Width + "px",
		height: Height + "px",
		display: "inline"
	});

}

/** 
 * Sets a custom data-attribute to a specified value on a specified element
 * @param {string} ID - The id of the element to create/set the data attribute of.
 * @param {string} Name - Name of the data attribute. ("data-" will be automatically appended to it.)
 * @param {string} Value - Value to give to the attribute.
 * @returns {void} - Nothing
 */
function ElementSetDataAttribute(ID, Name, Value) {
	var element = document.getElementById(ID);
	if (element != null) {
		element.setAttribute(("data-" + Name).toLowerCase(), Value.toString().toLowerCase());
	}
}

/**
 * Scrolls to the end of a specified element
 * @param {string} ID - The id of the element to scroll down to the bottom of.
 * @returns {void} - Nothing
 */
function ElementScrollToEnd(ID) {
	var element = document.getElementById(ID);
	if (element != null) element.scrollTop = element.scrollHeight;
}

/**
 * Checks if a given HTML element is scrolled to the very bottom. 
 * @param {string} ID - The id of the element to check for scroll height.
 * @returns {boolean} - Returns TRUE if the specified element is scrolled to the very bottom
 */
function ElementIsScrolledToEnd(ID) {
	var element = document.getElementById(ID);
	return element != null && element.scrollHeight - element.scrollTop - element.clientHeight < 1
}

/**
 * Gives focus to a specified existing element for non-mobile users. 
 * @param {string} ID - The id of the element to give focus to.
 * @returns {void} - Nothing
 */
function ElementFocus(ID) {
	if ((document.getElementById(ID) != null) && !CommonIsMobile)
		document.getElementById(ID).focus();
}
