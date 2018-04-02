// Rest param must be the last parameteres in the function.
function fun(a, ...b){
	console.log("a ", a)
	console.log("b length ", b.length)
}
fun();
fun(1,2,3,4)