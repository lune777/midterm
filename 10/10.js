function calc(){
    var array = [];
    var a = array.length;
    var sum = 0;
    var i = 5;
    if (a == 3) {
        if (array[2] == "+") {
            return array[1] + array[3];
        }
        else if(array[2] == "-"){
            return array[1] - array[3]; 
        }
    }
    else if (array[2] == "+") {
        sum += array[1] + array[3];
        while (i < a) {
            if (--i == "+") {
                return sum += array[i];
                i + 2;
            }
            else if (--i == "-") {
                return sum -= array[i];
                i + 2;
            }
        }   
    }
    else if (array[2] == "-") {
        sum -= array[1] + array[3];
         while (i < a) {
            if (--i == "+") {
                return sum += array[i];
                i + 2;
            }
            else if (--i == "-") {
                return sum -= array[i];
                i + 2;
            }
        }   
    }
}