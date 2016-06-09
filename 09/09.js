function countDigits(a) {
    if (a < 0) {
        return -1;
    }
    else if (a % 1 != 0) {
        return String(Math.ceil(a)).length;
    }
    else{
        return String(a).length;
    }
}