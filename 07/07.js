function distance(a,b) {
    if (a == b) {
        return 0;
    }
    else{
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }
}