function fibonacci(num) {
    // If num is 0, the first Fibonacci number is 0
    if (num === 0) return 0;
    
    // If num is 1, the first Fibonacci number is 0, so return 0
    if (num === 1) return 0;
    
    let a = 0;
    let b = 1;

    // Loop from 2 to num to find the nth Fibonacci number
    for(let i = 2; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    // If num is 2, return 1
    return b;
}

module.exports = fibonacci;
