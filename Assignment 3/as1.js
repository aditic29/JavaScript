//PART 1

//1

/*class rectangle 
{
	constructor(height, width)
	{
		this.height = height;
		this.width = width;
	}
}

rectangle rect1 = new rectangle(19.2,5.3);
rectangle rect2 = new rectangle(20,2);

console.log(rect1.height, rect1.width);
console.log(rect2.height, rect2.width);*/

//2

/*class rectangle 
{
	constructor(height, width)
	{
		this.height = height;
		this.width = width;
	}
	getArea()
	{
		return this.height*this.width;
	}
}

rectangle rect1 = new rectangle(10,2);
console.log(rect1.getArea());*/

//3
//The spelling of height is wrong.

//4

/*var p = {
	firstName: "Adu",
	lastName: "Chavan"
};

console.log(p.firstName);
console.log(p.lastName);*/

//5
/*var p = {
	firstName: "Adu",
	lastName: "Chavan"
};

console.log(p.middleName);
p.middleName = "A";
console.log(p.middleName);*/

//6

/*var p = eval('({"firstName": "Adu", "lastName": "Chavan"})');
console.log(p.firstName);
console.log(p.lastName);
console.log(p.middleName); //printing before defining
p.middleName = "A"
console.log(p.middleName); //printing after defining */ 

//7

/*var p = JSON.parse('{"firstName":"Adu", "lastName":"Chavan"}');
console.log(p.firstName);
console.log(p.lastName);*/

//PART 2

//2

/*function person(fname, lname, age, skills, dateofbirth, address, married, professional){
	this.fname=fname;
	this.lname=lname;
	this.age=age;
	this.skills=skills;
	this.dateofbirth=dateofbirth;
	this.address=address;
	this.married=married;
	this.professional=professional;
}

amitabh = new person("Amitab", "Bachan", 22, ["C"], "24/10/1996", {city:"Hyderabad", pincode:"510"}, false, "Sr Analyst");
abhishek = new person("Abhishek", "Bachan", 21, "HTML", "08/06/1997", false, "Jr Analyst");

var abhishek = Object.create(amitabh); //Values overridden by amitabh.

print = function(){
	console.log(amitabh);
	console.log(abhishek.lname);
	console.log(abhishek.address);
}();*/