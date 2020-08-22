// TODO: tweak drawCanvas (canvas vs Img for texture2D, verify everything is okay)

// THIS IS A DEMO

function AssetsItemNeckAccessoriesCustomCollarTagAfterDraw(data) { 
    //console.log('after draw');
    
    let TempCanvas = document.createElement("canvas");
    TempCanvas.setAttribute('name', AnimationTemporaryCanvasGetName(data.C, data.A));
    TempCanvas.width = 45;
    TempCanvas.height = 50;
    
    let context = TempCanvas.getContext('2d');
	context.font = "14px serif";
    context.fillStyle = "#FF0000";
    context.textAlign = "center";
    context.fillText(data.C.Name, 22.5, 22.5, 45);
    
    data.drawCanvas(TempCanvas, data.X + 227.5, data.Y + 30);
    data.drawCanvasBlink(TempCanvas, data.X + 227.5, data.Y + 30);
}

function AssetsItemNeckAccessoriesCustomCollarTagBeforeDraw(data) { 
    //console.log('before draw');
    const OverridenData = { CA: data.CA};
    OverridenData.CA.Color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return OverridenData;
}

function AssetsItemNeckAccessoriesCustomCollarTagScriptDraw(data) { 
    //console.log('script draw');
    // every second, new color so trigger a refresh
    if (typeof data.PersistentData().LastTime != "number") data.PersistentData().LastTime = 0;
    if (data.PersistentData().LastTime + 1000 < CommonTime()) { 
        CharacterRefresh(data.C, false);
        data.PersistentData().LastTime = CommonTime();
    } 
}