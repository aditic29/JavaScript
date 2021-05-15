function run()
{	
	var choice = prompt("1.Add\n 2.Subtract\n 3.Multiply\n 4.Divide\n 5.Exponent\n 6.Mean\n 7.Quit");

	if(choice==7)
	{
		badigand = false;
	}
	else if(choice==6)
	{
		i = 0;
		var s = "";
		arr = [];
		sum = 0;
		do
		{
			s = prompt("Enter a number");
			if(s == "^^^")
			{
				document.getElementById("resultBox").innerHTML= sum/i;
				break;
			}
			sum = sum + parseInt(s);
			i++;
		}while(true)
		
	}
	else
	{
		a = parseInt(prompt("Enter the first number"))
		b = parseInt(prompt("Enter the second number"));
		if(a!=NaN && b!=NaN)
		{
			if(choice==1){
				document.getElementById("resultBox").innerHTML= a+b;
			}
			else if(choice==2){
				document.getElementById("resultBox").innerHTML= a-b;
			}
			else if(choice==3){
				document.getElementById("resultBox").innerHTML= a*b;
			}
			else if(choice==4){
				document.getElementById("resultBox").innerHTML= a/b;
			}
			else{
				document.getElementById("resultBox").innerHTML= a**b;
			}
		}
		else{
			alert("Enter a number from 1 to 7");
		}
	}
	repeat();
}