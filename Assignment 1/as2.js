for(i=0; i<3; i++){
	var x=prompt("Enter a number");
	if(x<=30){
		for(j=0; j<x; j++){
			document.write("*");

		}
		document.write("<br>");
	}
	else{
		alert("Enter a number between 1 and 30");
	}
}