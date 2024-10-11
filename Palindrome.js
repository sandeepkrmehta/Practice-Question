// Write a JavaScript program to check if a number is a palindrome.

function answer() {
    let n = 121; 
    const org = n; 
    let rev = 0;   

    while (n !== 0) {
      rev = rev * 10 + n % 10; 
      n = Math.floor(n / 10);  
    }
    
    if (org === rev) {
      console.log("Palindrome");
    } else {
      console.log("Not Palindrome");
    }
}

answer();

