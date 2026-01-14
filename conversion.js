// from "hexToRGB.js"

// [To Do] Add default value : like red = #...

const defaultColorHex = "#000000";
const defaultColorRGB = [ 0, 0, 0];


export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    // ReGeX flag i : /.../i case-insensitive
    // ([a-f\d]{2}) -> find a value a to d including digits two times
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
    return result ? [
        parseInt(result[1], 16), // r
        parseInt(result[2], 16), // g
        parseInt(result[3], 16)  // b
    ] : defaultColorHex;
}

export function rgbToHex(rgb) {

    const lengthRGB = 3;
    if(rgb.length != lengthRGB) {
        return defaultColorRGB;
    }

    let str = "#";
    for ( let i = 0; i < lengthRGB; i++) {
        const binValue = rgb[i].toString(16).padStart(2, 0); // convert to bin
        str += binValue;
    }

    return str;
}

// rgbToHex( [255,3,0]);