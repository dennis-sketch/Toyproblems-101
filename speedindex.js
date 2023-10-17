function demeritPoints(speed) {
    if (speed <= 70) return "OK";
    const points = Math.floor((speed - 70) / 5);
    return points > 12 ? "License suspended" : points;
}
