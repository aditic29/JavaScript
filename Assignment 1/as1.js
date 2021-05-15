 function showResults(){
 	var far = document.getElementById("tempfar").value;
 	if(far.length<1){
 		alert("Enter the temperature");
 	}
 	else{
 		var cel = (far-32)*(3/5);
 		alert(cel+" degree Celcius");
 	}
 }