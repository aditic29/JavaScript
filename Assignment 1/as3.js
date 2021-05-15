var rows = prompt("Enter number of rows");
var columns = prompt("Enter number of columns");

var tab = document.getElementById("table");
for (i=0; i<rows; i++){
	var row = tab.insertRow(i);
	for(j=0; j<columns; j++){
		var column = row.insertCell(j);
		column.innerHTML = ("Row "+i+", Col "+j);
	}
}

//document.getElementById("table").style.border = "1px solid black";