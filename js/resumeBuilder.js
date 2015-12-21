var name = "Brian Matos";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "Brian",
    "role": "Web Developer",
    "contacts": {
        "mobile": "201-207-8207",
        "email": "matosb02@gmail.com",
        "github": "https://github.com/matosb2",
        "location": "Kearny, New Jersey"
    },
    "bioPic": "images/me.jpg",
    "welcome": "Hello, My name is brian and I'm looking forward to this course.",
    "skills": ["Microsoft Office ", "HTML & CSS ", "JavaScript & JSON "]
};

var work = {
    "jobs": [{
        "employer": "Online Commerce Pros",
        "title": "Compliance Representative/Billing Specialist",
        "location": "New York",
        "dates": "2013-2015",
        "description": "Managed customer transactions and documents through merchant applications, CRM, and Fulfillment"
    }, {
        "employer": "Marketing Solutions Group",
        "title": "Billing Specialist",
        "location": "New York",
        "dates": "2015-2015",
        "description": "Responsible for client billing and analyzing statements, and tracked and recorded all data management"
    }]
}

var education = {
    "schools": [{
        "name": "Bergen Community College",
        "city": "Paramus, NJ",
        "major": "Professional Studies",
        "degree" : "A.S.",
        "years": "-2010"
    }, {
        "name": "Montclair State University",
        "city": "Montclair, NJ",
        "major": "English",
        "degree" : "B.A.",
        "years": "-2013"
    }],
    "onlineCourses": [{
        "title": ["Javascript Syntax", "Intro to HTML and CSS", "How to Use Git and GitHub", "Linux Command Line Basics"],
        "school": "Udacity",
        "dates": 2015,
        "url": "www.udacity.com"
    }]
}

var myprojects = {
    "projects": [{
        "title": "Building a Portfolio Site",
        "dates": "10/23/2015-11/23/2015",
        "description": "First project after learning basic HTML & CSS, where I learned and built a responsive Portfolio Website",
        "url": "https://github.com/matosb2/P1.git",
        "images": ["http://i.imgur.com/a7oWe0a.jpg"]
    }]
}


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill)
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();


projects.display = function() {
    for (project in myprojects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", myprojects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", myprojects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", myprojects.projects[project].description);
        var formattedImage = HTMLprojectImage.replace("%data", myprojects.projects[project].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (myprojects.projects[project].images.length > 0) {
            for (image in myprojects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data", myprojects.projects[project].images);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedDegree);
	}
}
displayEducation();

$("#mapDiv").append(googleMap);