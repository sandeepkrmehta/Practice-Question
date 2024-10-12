function answer(n) {
    let rev = 0;

    while (n !== 0) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10); 
    }

    console.log("Reversed number:", rev);
}

// Define the number directly
let n = 12345; // Replace with the desired number
answer(n);
