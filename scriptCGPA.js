// JavaScript source code
function cgpa(){
function gradesorter(grade){
	if(grade==='S' || grade==='s'){
		return 10;
	}

	else if(grade==='A' || grade==='a'){
		return 9;
	}

	else if(grade==='B' || grade==='b'){
		return 8;
	}

	else if(grade==='C' || grade==='c'){
		return 7;
	}

	else if(grade==='D' || grade==='d'){
		return 6;
	}

	else if(grade==='E' || grade==='e'){
		return 4;
	}

	else{
		return 0;
	}
}

var grade1 = gradesorter(document.getElementById("grade1").value);

var grade2 = gradesorter(document.getElementById("grade2").value);

var grade3 = gradesorter(document.getElementById("grade3").value);

var grade4 = gradesorter(document.getElementById("grade4").value);

var grade5 = gradesorter(document.getElementById("grade5").value);

var grade6 = gradesorter(document.getElementById("grade6").value);

 var a=parseInt(document.getElementById("credit1").value);
if(typeof a === 'number')
	{
	
	var credit1 = a ;

	}

else {
	var credit1 = 0;
	}

var b= parseInt(document.getElementById("credit2").value);

if(typeof b=== 'number')
	{
	
	var credit2= b;

	}

else {

	var credit2 = 0;
	
	}

var c = parseInt(document.getElementById("credit3").value);

if(typeof c=== 'number')
	{
	
	var credit3= c;

	}

else {
	var credit3 = 0;
	}

var d = parseInt(document.getElementById("credit4").value);

if(typeof d === 'number')
	{
	
	var credit4= d;

	}

else {

	var credit4 = 0;
}	

var e = parseInt(document.getElementById("credit5").value);

if(typeof e === 'number')
	{
	
	var credit5= e;

	}

else {

	var credit5 = 0;
}	

var f = parseInt(document.getElementById("credit6").value);

if(typeof(document.getElementById("credit6").value)=== 'number')
	{
	
	var credit6= f;

	}

else {

	var credit6 = 0;
	
}

var g = parseInt(document.getElementById("lastcg").value);

if(typeof g=== 'number')
	{
	
	var currentcg = g;

	}

else {
var currentcg = 0;
}

var h = parseInt(document.getElementById("credits").value);

if(typeof h=== 'number')
	{
	
	var creditscompleted = h;

	}

else {
var creditscompleted = 0;
}
var x,y,z;

x = grade1*credit1 + grade2*credit2 + grade3*credit3 + grade4*credit4 + grade5*credit5 + grade6*credit6;

y = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;

z = (currentcg*creditscompleted + x)/(creditscompleted+y);


document.getElementById("ff").innerHTML=z;

if ( z>=9 ){
	document.getElementById("alert").innerHTML = "Hey Topper!!";
}

else if ( z<=5 ){
	document.getElementById("alert").innerHTML = "Dont worry Just Work Hard";
}

else if ( z<=8 && z>= 5 ){
	document.getElementById("alert").innerHTML = "Just put Little More Effort and Make it above 8!!";
}
}

