const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function isPalindrome(n) {
    let str = n.toString();
    let reverse = str.split("").reverse().join("");

    return str === reverse;
}

rl.question("Enter a positive integer: ", (input) => {
    let n = Number(input);

    if (isPrime(n)) {
        let next = n + 1;

        while (!isPalindrome(next)) {
            next++;
        }

        console.log(next);
    } else {
        console.log("not prime");
    }

    rl.close();
});

