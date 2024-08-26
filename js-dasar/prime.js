let a = 10;

function isPrime(num, init = 2) {
    if (num <= 2) {
        return num === 2 ? true : false;
    }
    if (num % init === 0) {
        return false
    }
    if (init * init > num) {
        return true
    }
    return isPrime(num, init + 1);
}