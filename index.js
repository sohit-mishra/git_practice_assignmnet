var isPrime = true;
function primeNumber(n) {
    if (n === 1) {
        console.log("1 is neihter prime or composite number");
    } else if (n > 1) {
        for (var i = 0; i < n; i++) {
            if (n % 2 === 0) {
                isPrime = false; break;
            } if (isPrime) {
                console.log("it is not prime number");
            } else {
                console.log("it is prime number");
            }
        }
    } else {
        console.log("it ic composite number");
    }
}

primeNumber(23);
primeNumber(20);