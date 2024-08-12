function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	for(let i=1; i<= num; i++){
		let c = a+b;
		a=b;
		b=c;
	}
	return a;
}

module.exports = fibonacci;
