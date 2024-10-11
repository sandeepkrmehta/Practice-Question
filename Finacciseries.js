function answer(){
    let n = 5;
    let a = 0, b = 1;
    let result = `${a}${b}`;

    for(let i = 2; i<n; i++){
        let sum = a + b;
        result += `${sum}`;
        a=b;
        b=sum;
    }
    console.log(result);
}

answer();