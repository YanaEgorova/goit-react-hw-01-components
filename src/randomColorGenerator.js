export default function randomColorGenerator() {
    let red = 0 + Math.random() * (254 + 1 - 0);
    red = Math.floor(red);
    let green = 0 + Math.random() * (254 + 1 - 0);
    green = Math.floor(green);
    let blue = 0 + Math.random() * (254 + 1 - 0);
    blue = Math.floor(blue);
    let rgb = `rgb(${red}, ${green},${blue})`;
    return rgb;
}
