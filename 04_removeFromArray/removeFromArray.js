const removeFromArray = function(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr.splice(i)
        }     
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
