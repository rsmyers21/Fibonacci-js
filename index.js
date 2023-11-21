/*Program that implements a fibonacci alogorithm and returns the first n numbers in Javascript */

function fibonacci (n) {
    const fibArray = [0, 1];
    
    for (let i=2; i < n; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray
}

console.log(fibonacci(10));