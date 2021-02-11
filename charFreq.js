// start by turning string into an array of string's chars
var charFreq = string => {
    var arr = string.split('');
//initialize an object, the key will be the char, the value will be the number of times the char occurs
    var obj = {};
//we iterate through arr, creating our object with the results
    for(let i = 0; i < arr.length; i++) {
//we check to see if the object contains a key that matches arr[i], if not we creat a new key with value of 1, if it does, we add 1 to current value
        var key = arr[i];
        if(!obj[key]) {
            obj[key] = 1;
        } else {
            obj[key]++;
        }
    }
//we now create an empty array, we will push our object properties into the array
var sortArr = [];

for(let prop in obj) {
    sortArr.push([prop, obj[prop]]);
}
//we now sort our array in decreasing order
sortArr.sort(function (a, b) {
    return b[1] - a[1];
});
//we create an empty string, this will be our result
var result = '';
//we iterate through sortArr, which is a 2d array, concatenating our characters to our result string
for(let i = 0; i < sortArr.length; i++) {
//sortArr[i][1] allows us to loop through each character the number of times it is present
    for(let j = 0; j < sortArr[i][1]; j++) {
        result += sortArr[i][0];
    }
}
return result;
} 