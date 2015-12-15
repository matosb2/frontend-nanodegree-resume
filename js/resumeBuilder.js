/*var name = "Brian Matos";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
	"name" : "Brian",
	"role" : "Web Developer",
	"contact" : "matosb02@gmail.com",
	"bioPic" : "images/fry.jpg",
	"welcome" : "Hello, My name is brian and I'm looking forward to this course.",
	"skills" : ["Microsoft Office ", "HTML & CSS ", "JavaScript & JSON "]
};

var work = {
	"jobs" : [
	{
		"employer" : "Online Commerce Pros",
		"title" : "Compliance Representative/Billing Specialist",
		"location" : "New York",
		"dates" : "2013-2015",
		"description" : "Managed customer transactions and documents through merchant applications, CRM, and Fulfillment"
	},
	{
		"employer" : "Marketing Solutions Group",
		"title" : "Billing Specialist",
		"location" : "New York",
		"dates" : "2015-2015",
		"description" : "Responsible for client billing and analyzing statements, and tracked and recorded all data management"
	}
	]
}

var education = {
	"schools" : [
	{
		"name" : "Bergen Community College",
		"city" : "Paramus, NJ",
		"major" : "A.S. Professional Studies",
		"years" : "2"
	},
	{
		"name" : "Montclair State University",
		"city" : "Montclair, NJ",
		"major" : "B.A. English",
		"years" : "2"
	}
	],
	"onlineCourses" : [
	{
		"title" : ["Javascript Syntax", "Intro to HTML and CSS", "How to Use Git and GitHub", "Linux Command Line Basics"],
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "www.udacity.com"
	}
	]
}

var myprojects = {
	"projects" : [
	{
		"title" : "Building a Portfolio Site",
		"dates" : "10/23/2015-11/23/2015",
		"description" : "First project after learning basic HTML & CSS, where I learned and built a responsive Portfolio Website",
		"url" : "https://github.com/matosb2/P1.git",
		"images" : ["http://i.imgur.com/a7oWe0a.jpg"]
	}]
}
$("#main").append(education["school"]);
$("#main").append(work.position);
