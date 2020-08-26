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

var a =document.getElementById("credit1").value;

if ( a === '') {

	var credit1 = 0;

}

else {

	var credit1 = parseInt(document.getElementById("credit1").value);

}


var b= document.getElementById("credit2").value;

if( b === '')
	{
	
	var credit2= 0;

	}

else {

	var credit2 =  parseInt(document.getElementById("credit2").value);
	
	}

var c = document.getElementById("credit3").value;

if( c=== '')
	{
	
	var credit3 = 0;


	}

else {
	var credit3 = parseInt(document.getElementById("credit3").value);
	}

var d = document.getElementById("credit4").value;

if( d === '')
	{
	
	var credit4= 0;

	}

else {

	var credit4 = parseInt(document.getElementById("credit4").value);
}	

var e = document.getElementById("credit5").value;

if( e === '')
	{
	
	var credit5 = 0;

	}

else {

	var credit5 = parseInt(document.getElementById("credit5").value);
}	

var f = document.getElementById("credit6").value;

if( f === '')
	{
	
	var credit6 =  0;

	}

else {

	var credit6 =  parseInt(document.getElementById("credit6").value);
	
}

var g = document.getElementById("lastcg").value;

if( g === '')
	{
	
	var currentcg = 0;

	}

else {
var currentcg = parseInt(document.getElementById("lastcg").value);
}

var h = document.getElementById("credits").value;

if( h=== '')
	{
	
	var creditscompleted = 0;

	}

else {
var creditscompleted = parseInt(document.getElementById("credits").value);

}
var x,y,z;

x = grade1*credit1 + grade2*credit2 + grade3*credit3 + grade4*credit4 + grade5*credit5 + grade6*credit6;

y = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;

z = (currentcg*creditscompleted + x)/(creditscompleted+y);



z=z.toFixed(2);


document.getElementById("ff").innerHTML=z;

if ( z>=9 ){
	document.getElementById("alert").innerHTML = "Hey Topper!!";
}

else if ( z<=5 ){
	document.getElementById("alert").innerHTML = "Dont worry Just Work Hard";
}

else if ( z<8 && z>= 5 ){
	document.getElementById("alert").innerHTML = "Just put Little More Effort and Make it above 8!!";
}
}

