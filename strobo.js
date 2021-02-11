// n = length of integer
// m = length in recursive function

const findStrobo = function(n) {
    //Using recursive function to find the solution
    var recur = function(m) {
        //setting base cases
        if(m == 0) {
            //if m == 0, there are no valid integers
            return [''];
        } else if (m == 1) {
            //if m == 1, there are only 3 valid integers
            return ['0', '1', '8'];
        }
        //recursivley calling function to to get result of length - 2, we do this because we must add numbers in pairs to keep the resulting integer strobogramattic
        var list = recur(m-2);
        //creating our result array where we will push our valid integers 
        var newList = [];
        for(var key in list) {
            // if m == n, we can not push '0' to the front of an integer, this would not be a valid integer
            if(m != n) {
                newList.push('0' + list[key] + '0');
            }
            // we iterate through list and push strobogrammatic integers onto the newList array
            newList.push('1' + list[key] + '1');
            newList.push('8' + list[key] + '8');
            newList.push('6' + list[key] + '9');
            newList.push('9' + list[key] + '6');
        }
        return newList;
    } 
    return recur(n);
}
