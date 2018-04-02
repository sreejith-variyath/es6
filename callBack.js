function callBack(log){
	log();
}

callBack(function(){console.log("test")}) // function is send as a parameter to another function

callBack(()=>{console.log("test lambda call back")})