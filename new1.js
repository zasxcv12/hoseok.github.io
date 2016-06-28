function movPic(){

	dom = document.getElementById('imagetomove').style;
	var randomnumber=(Math.floor(Math.random()*120) + 50);
	dom.left = randomnumber + "px";	
	setTimeout("movPic()",500)
	}
	
function validate(){
	
	var name = document.getElementById("name").value;
var pattern1=/^[A-Z][a-z]+$/; //match against first letter is a capital letter and contains digits
var r1 = pattern1.test(name);

if((name == '') || (r1 == false)){		
		alert("name is either empty or contains digits / first letter is not a capital letter \n");
		return false;
	}

var email = document.getElementById("email").value;
var pattern2 = /^\w+@\w/; // match against Not a whitespace character
	r2 = pattern2.test(email); 
	
	if((email == '') || (r2 == false)){
		alert("email cannot be empty or needs to have @ \n");
		return false;
	}

}

	