export default () => {
    let outputColor = `rgba(`;
    for(let i = 0; i < 3; i ++) {
        outputColor += `${getNumber()}, `;
    }
    outputColor +=`1)`;
    return outputColor;

    function getNumber() {
        return Math.floor(Math.random() * 256);
    }
}