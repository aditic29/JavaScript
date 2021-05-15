//1

/*var n = parseInt(prompt("Enter a number"));
myFunction(n)

function myFunction(num){

	if (num%2==0) {
		document.write(num + " is an even number");
	}
	else{
		document.write(num + " is an odd number");	
	}
}*/

//2

/*var num1 = parseInt(prompt("Enter the 1st number"));
var num2 = parseInt(prompt("Enter the 2nd number"));
var num3 = parseInt(prompt("Enter the 3rd number"));
myFunction(num1, num2, num3);

function myFunction(a,b,c)
{
	if (a>b) 
	{
		if (a>c) 
		{
			document.write(a+ " is the maximum number");
		}
		else 
		{
			document.write(c+ " is the maximum number");
		}

	}
	else
	{
		if(b>c)
		{
			document.write(b+ " is the maximum number");
		}
		else{
			document.write(c+ " is the maximum number");
		}
	}
}*/

//3

/*var num = parseInt(prompt("Enter a number"));
myFunction(num);

function myFunction(n){
	countHead = 0
	countTail = 0
	for (i=0; i<n;i++)
	{
		coin = Math.floor(Math.random()*2)
		//console.log(coin);
		if (coin==1)
		{
			countHead++;
		}
		else
		{
			countTail++;
		}
	}
	document.write("Heads occurs "+countHead+" times.");
}*/

//4

/*var num = parseInt(prompt("Enter a number"));
myFunction(num);

function myFunction(n){
	countHead = 0
	countTail = 0
	for (i=0; i<n;i++)
	{
		coin = Math.floor(Math.random()*2)
		console.log(coin);
		if (coin==1)
		{
			countHead++;
		}
		else
		{
			countTail++;
		}
	}
	document.write(countHead/n);
}*/

//5

/*var num = parseInt(prompt("Enter a number"));
var str = prompt("Enter a string");

myFunction(num,str);

function myFunction(n, s)
{
	var repeat = "";
	for(i=0; i<n; i++)
	{
		repeat=repeat+s;
	}
	document.write(repeat);
}*/

//6

/*myFunction();

function myFunction(){
	count=0;
	while(die!=6){
		var die = Math.floor((Math.random()*6)+1);
		//console.log(die);
		count++;	
	}
	document.write(count);
}*/

//7

/*myFunction();

function myFunction(){
	var num = Math.floor(Math.random()*2);
	if(num==1){
		document.write("Have a Good Day.");
	}
	else{
		document.write("Have a Bad Day.");
	}
}*/