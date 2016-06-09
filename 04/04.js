function xor(a,b) {
    if (a == true && b == true) {
        return false;
    }
    else if (a == false && b == false) {
        return false;
    }
    else if (a == true || b == true) {
        return true;
    }
}