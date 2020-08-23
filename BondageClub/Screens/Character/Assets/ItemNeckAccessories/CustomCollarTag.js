// TODO: tweak drawCanvas (canvas vs Img for texture2D, verify everything is okay)

// THIS IS A DEMO

function AssetsItemNeckAccessoriesCustomCollarTagAfterDraw({
    C, A, X, Y, drawCanvas, drawCanvasBlink
}) { 
    //console.log('after draw');
    
    let TempCanvas = document.createElement("canvas");
    TempCanvas.setAttribute('name', AnimationGetDynamicDataName(C, AnimationDataTypes.Canvas, A));
    TempCanvas.width = 45;
    TempCanvas.height = 50;
    
    let context = TempCanvas.getContext('2d');
	context.font = "14px serif";
    context.fillStyle = "#FF0000";
    context.textAlign = "center";
    context.fillText(C.Name, 22.5, 22.5, 45);
    
    drawCanvas(TempCanvas, X + 227.5, Y + 30);
    drawCanvasBlink(TempCanvas, X + 227.5, Y + 30);
}

function AssetsItemNeckAccessoriesCustomCollarTagBeforeDraw({ CA }) { 
    //console.log('before draw');
    const OverridenData = { CA };
    OverridenData.CA.Color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return OverridenData;
}

function AssetsItemNeckAccessoriesCustomCollarTagScriptDraw({C, PersistentData}) { 
    //console.log('script draw');
    // every second, new color so trigger a refresh
    if (typeof PersistentData().LastTime != "number") {
        PersistentData().LastTime = 0;
        AnimationRequestRefreshRate(C, 1000);
    }
    if (PersistentData().LastTime + 1000 < CommonTime()) { 
        AnimationRequestDraw(C);
        PersistentData().LastTime = CommonTime();
    } 
}