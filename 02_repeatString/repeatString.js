const repeatString = function(str, num) {
    if (num == 0) {

        return "";

    } else if (num < 0) {

        return "ERROR";
    }
    let newstr = "";
    
    for (let index = 0; index < num; index++) {
        
        newstr = newstr + str;
        
    }
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
