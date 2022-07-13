//Palindrome

function solution(inputString) {

    var len = inputString.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (inputString[i] !== inputString[len - 1 - i]) {
            return false;
        }
    }

    return true;
}