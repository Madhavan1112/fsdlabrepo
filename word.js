const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence) => {

    const result = sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

    console.log("Reversed sentence:", result);

    rl.close();
});
