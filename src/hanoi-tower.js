module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const sec = 3600;
    let move = Math.pow(2, disksNumber) - 1;
    let speed = move / (turnsSpeed / sec);
    return { turns: move, seconds: speed };
}