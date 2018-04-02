// let give scope of nearest closing bracket.
function test(){
	var num = 100
	console.log("local scope ",num);
	{
		let num = 1000
		console.log("block scope ", num);
	}

}
test()