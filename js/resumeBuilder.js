var bio = {
    "name": "Brian Matos",
    "role": "Web Developer",
    "contacts": {
        "mobile": "201-207-8207",
        "email": "matosb02@gmail.com",
        "github": "https://github.com/matosb2",
        "location": "Kearny, New Jersey"
    },
    "bioPic": "images/me1.jpg",
    "welcome": "Hello there!!  I'm a new and enthusiastic web developer joining the scene in an ambitious fashion.  I look forward to becoming a part of projects that can use a helping hand.  I try my best in anything do and am a bit competitive so I don't lose motivation because I have the world to compete with and I don't want to fall behind!  I Look forward to speaking to you soon.",
    "skills": ["Microsoft Office ", "HTML & CSS ", "JavaScript & JSON "]
};

var work = {
    "jobs": [{
        "employer": "Online Commerce Pros",
        "title": "Compliance Representative/Billing Specialist",
        "location": "New York, NY",
        "dates": "2013-2015",
        "description": "Managed customer transactions and documents through merchant applications, CRM, and Fulfillment.  Worked daily with clients via phone to guide them and complete necessary legal documents."
    }, {
        "employer": "Marketing Solutions Group",
        "title": "Billing Specialist",
        "location": "New York, NY",
        "dates": "2015-2015",
        "description": "Responsible for client billing and analyzing statements, and tracked and recorded all data management.  Trained new emplyees to company's standard and also created fixed schedule for sales department in company."
    }]
}

var education = {
    "schools": [{
        "name": "Bergen Community College",
        "location": "Paramus, NJ",
        "major": "Professional Studies",
        "degree" : "A.S.",
        "years": "-2010"
    }, {
        "name": "Montclair State University",
        "location": "Montclair, NJ",
        "major": "English",
        "degree" : "B.A.",
        "years": "-2013"
    }],
    "onlineCourses": [{
        "title": ["Javascript Syntax", "Intro to HTML and CSS", "How to Use Git and GitHub", "Linux Command Line Basics, Front-End Web Developer Nanodegree"],
        "school": "Udacity",
        "dates": "2015-",
        "url": "www.udacity.com"
    }]
}

var myprojects = {
    "projects": [{
        "title": "Building a Portfolio Site",
        "dates": "10/23/2015-11/23/2015",
        "description": "First project after learning basic HTML & CSS, where I learned and built a responsive Portfolio Website.  This was also a website mockup that was completed to course's standards",
        "url": "https://github.com/matosb2/P1.git",
        "images": ["images/project.jpg"]
    }]
}




function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
    if (bio.skills.length > 0) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill)
    }
}

displayBio ();

function displayWork() {
	$("#workExperience").append(HTMLworkStart);
    for (job in work.jobs) {
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
	$("#projects").append(HTMLprojectStart);
    for (project in myprojects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", myprojects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", myprojects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", myprojects.projects[project].description);
        var formattedImage = HTMLprojectImage.replace("%data%", myprojects.projects[project].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (myprojects.projects[project].images.length > 0) {
            for (image in myprojects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", myprojects.projects[project].images);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

function displayEducation() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
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

function displayonlineCourses() {
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title[0]);
		$(".education-entry:last").append(formattedonlineTitle);
		formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title[1]);
		$(".education-entry:last").append(formattedonlineTitle);
		formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title[2]);
		$(".education-entry:last").append(formattedonlineTitle);
		formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title[3]);
		$(".education-entry:last").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace ("%data%", education.onlineCourses[onlineCourse].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedonlineSchool);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineURL);
	}
}
displayonlineCourses();

$("#mapDiv").append(googleMap);