import * as Conv from './conversion.js';

// The color line 
// between 1 1275

const defaultColor = "#000000";
export function colorLine(position, length) {
 
    // 0 0 0 | 1 1 1 ?
    
    //   1   0 0 |  1    1   0 |  0   1  0 | 0  1    1   | 0  0   1  |   1   0  1
    // (255) 0 0 | 255 (255) 0 | (0) 255 0 | 0 255 (255) | 0 (0) 255 | (255) 0 255 
    // -> 255 * 6 = 1530
    const max_pos = 1530;
    const max_rgb = 255;

    const pourcentage = position / length;
    const value = pourcentage * max_pos;

    if (value < 0 && value >= max_pos) {
        return defaultColor;
    }

    const quadrant = Math.floor(value / 255);
    console.log(`P:${value} Q:${quadrant}`);
    let r;
    let g;
    let b;

    switch (quadrant) {

        case 0:
            r = value;
            g = 0;
            b = 0;
            break;

        case 1:
            r = max_rgb;
            g = value % max_rgb;
            b = 0;
            break;

        case 2:
            r = value % max_rgb;
            g = max_rgb;
            b = 0;
            break;

        case 3:
            r = 0; 
            g = max_rgb;
            b = value % max_rgb;
            break;

        case 4:
            r = 0;
            g = value % max_rgb;
            b = max_rgb;
            break;

        case 5:
            r = value % max_rgb;
            g = 0;
            b = max_rgb;
            break;

        default:
            return defaultColor;
    }

    console.log(`R:${r} G:${g} B:${b}`);
    return Conv.rgbToHex( [r,g,b] );
}

const pos = 0;
console.log(colorLine(pos));