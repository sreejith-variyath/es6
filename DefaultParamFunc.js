function add (a, b = 1){
	return a+b;
}

var sum = add(2)
console.log("called add with out b (2+default_b)", sum)
var sum = add(2,3)
console.log("called add with both a and b (2+3)", sum)