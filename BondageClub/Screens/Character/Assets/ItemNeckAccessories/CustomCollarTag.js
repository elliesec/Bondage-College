// THIS IS A DEMO

function AssetsItemNeckAccessoriesCustomCollarTagAfterDraw({
    C, A, X, Y, drawCanvas, drawCanvasBlink
}) { 
    
    // We set up a canvas
    let TempCanvas = document.createElement("canvas"); 
    TempCanvas.setAttribute('name', AnimationGetDynamicDataName(C, AnimationDataTypes.Canvas, A));
    TempCanvas.width = 45;
    TempCanvas.height = 50;
    
    // We draw the desired info on that canvas
    let context = TempCanvas.getContext('2d');
	context.font = "14px serif";
    context.fillStyle = "#FF0000";
    context.textAlign = "center";
    context.fillText(C.Name, 22.5, 22.5, 45);
    
    // We print the canvas to the character based on the asset position
    drawCanvas(TempCanvas, X + 227.5, Y + 30);
    drawCanvasBlink(TempCanvas, X + 227.5, Y + 30);
}

function AssetsItemNeckAccessoriesCustomCollarTagBeforeDraw({ CA }) { 
    // Before drawing, we overwrite the item color. It does not get saved, but it makes the item random. Overriden data must be returned inside an object with the same key.
    const OverridenData = { CA };
    OverridenData.CA.Color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return OverridenData;
}

function AssetsItemNeckAccessoriesCustomCollarTagScriptDraw({C, PersistentData}) { 
    // every second, new color so trigger a refresh
    if (typeof PersistentData().LastTime != "number") PersistentData().LastTime = 0; // When the item is first worn
    if (PersistentData().LastTime + 1000 < CommonTime()) { 
        AnimationRequestRefreshRate(C, 1000); // We request the maximum refresh rate to be lowered down to at least 1 second for this item
        AnimationRequestDraw(C); // We request a character refresh the next time animations are refresh based on the requested rate.
        PersistentData().LastTime = CommonTime(); // We save the last time we tried to refresh on the object for optimisation and to make sure we draw only once per second as this is the item's intended behavior
    } 
}