const removeFromArray = function(arr, ...value) {

    for (let index = 0; index < value.length; index++)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value[index]) {
                arr.splice(i , 1);
                i--;
            }     
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
