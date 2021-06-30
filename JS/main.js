var pythonProjects = [];
pythonProjects[0]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/Python-Projects/tree/main/StudentTracking'>Student Tracker</a></li>";
pythonProjects[1]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/Python-Projects/blob/main/FileTranserProject.py'>File Management Program</a></li>";
pythonProjects[2]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/Python-Projects/blob/main/OpenOrClosedByTimezone.py'>TimeZone Checker</a></li>";

var javascriptProjects = [];
javascriptProjects[0]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/JavaScript-Projects/tree/main/Vanilla%20JavaScript/Pizza_Project'>Pizza Shop Project</a></li>";
javascriptProjects[1]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/JavaScript-Projects/tree/main/Vanilla%20JavaScript/TicTacToe'>Tic Tac Toe </a></li>";
javascriptProjects[2]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/JavaScript-Projects/tree/main/Vanilla%20JavaScript/To-Do%20list'>To-Do List</a></li>";


var csProjects = [];
csProjects[0]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/C-Sharp/tree/main/CarInsurance%20-%20Update'>Car insurance CRUD app </a></li>"
csProjects[1]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/C-Sharp/tree/main/NewsletterAppMVC'>NewsLetter MVC-CRUD app</a></li>"
csProjects[2]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/C-Sharp/tree/main/ClassesAndObjectsBlackJack_GreatResource'>BlackJack</a></li>"

var mvcProjects = [];
mvcProjects[0]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/CSharpLiveProject'>Rental manager of a CMS</a></li>"


var djangoProjects = [];
djangoProjects[0]= "<li class='list-group-item d-flex justify-content-between align-items-center'><a href='https://github.com/JosephOmalley/DjangoProject'>WordNerd Django CRUD app</a></li>"



var i = 0;
var txt = ' me by filling out the info below.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const card = document.querySelectorAll('.card-inner');
card.forEach((card) => {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped')
    }); 
});

var aryofstring = ["<li class='list-group-item d-flex justify-content-between align-items-center'><a href=Portfolio_images/MyResume_JosephOmalley.pdf'>Super css project</a></li>", "<li class='list-group-item d-flex justify-content-between align-items-center'><a href=Portfolio_images/MyResume_JosephOmalley.pdf'>another awesome css project</a></li>"];

$(document).ready(function(){
  $(".HTML").click(function(){
	$("#sortTitle").html("My experience with :");
	if ($("#sortTitle").html().includes($(this).attr("data-skill"))){
		console.log("Already, wrote that")
	}
	else{
		$("#sortTitle").append($(this).attr("data-skill"));
    $("#Experience_Col li").remove()
    if ($(this).attr("data-skill") == " Django" ){for (let i = 0; i < aryofstring.length; i++){$("#sortedProjects").append(djangoProjects[i])}}
    else if ($(this).attr("data-skill") == " MVC"){for (let i = 0; i < aryofstring.length; i++){$("#sortedProjects").append(mvcProjects[i])}}
    else if ($(this).attr("data-skill") == " JavaScript"){for (let i = 0; i < javascriptProjects.length; i++){$("#sortedProjects").append(javascriptProjects[i])}}
    else if ($(this).attr("data-skill") == " Python"){for (let i = 0; i < pythonProjects.length; i++){$("#sortedProjects").append(pythonProjects[i])}}
    else if ($(this).attr("data-skill") == " C#"){for (let i = 0; i < aryofstring.length; i++){$("#sortedProjects").append(csProjects[i])}}


	}
  });
});

$(document).ready(function(){
  $("#clickme").click(function(){
    console.log("click linked ")
    $("#Experience_Col li").remove()
  });
});


//Array stored below


