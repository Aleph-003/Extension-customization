// ...
// Wait until the DOM is loaded
function getColor(x, y) {
    const r = Math.floor(x % 256);
    const g = Math.floor(y % 256);
    const b = 150;
    return `rgb(${r},${g},${b})`;
}
