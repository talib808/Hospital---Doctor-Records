// fill in javascript code here
document.querySelector("form").addEventListener("submit",records);
function records() {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var docID = document.getElementById("docID").value;
  var dept = document.getElementById("dept").value;
  var exp = document.getElementById("exp").value;
  var email = document.getElementById("email").value;
  var mbl = document.getElementById("mbl").value;

var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerText = name;
var td2 = document.createElement("td");
td2.innerText = docID;
var td3 = document.createElement("td");
td3.innerText =dept;
var td4 = document.createElement("td");
td4.innerText = exp;
var td5 = document.createElement("td");
td5.innerText = email;
var td6 = document.createElement("td");
td6.innerText = mbl;
var td7 = document.createElement("td");
td7.innerText = role;
var td8 = document.createElement("td");
td8.innerText = "delete";

var role = "";
if (exp > 5 ) role = "Senior";
else if( exp>= 2 && exp<= 5) role = "Junior";
else if( exp <=1 ) role = "Trainee";

td8.addEventListener("click", delete_Row);
td8.style.background= "red";
tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
var tbody = document.querySelector("tbody");
tbody.append(tr);
}
function delete_Row() {
    event.target.parentNode.remove();
}



