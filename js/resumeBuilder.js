var bio = {
    "name": "Brian Matos",
    "role": "Web Developer",
    "contacts": {
        "mobile": "201-207-8207",
        "email": "matosb02@gmail.com",
        "twitter": "www.twitter.com/donthaveone",
        "github": "https://github.com/matosb2",
        "location": "Kearny, New Jersey"
    },
    "biopic": "images/me1.jpg",
    "welcomeMessage": "Hello there!!  I'm a new and enthusiastic web developer joining the scene in an ambitious fashion.  I look forward to becoming a part of projects that can use a helping hand.  I try my best in anything do and am a bit competitive so I don't lose motivation because I have the world to compete with and I don't want to fall behind!  I Look forward to speaking to you soon.",
    "skills": ["Microsoft Office ", "HTML & CSS ", "JavaScript & JSON "]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
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

bio.display();

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

work.display = function() {
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

work.display();

var education = {
    "schools": [{
        "name": "Bergen Community College",
        "location": "Paramus, NJ",
        "degree": "A.S.",
        "majors": ["Professional Studies"],
        "dates": "-2010",
        "url": "http://www.bergen.edu"
    }, {
        "name": "Montclair State University",
        "location": "Montclair, NJ",
        "degree": "B.A.",
        "majors": ["English"],
        "dates": "-2013",
        "url": "http://www.montclair.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
}

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedUrl = HTMLschoolDates.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedDates);
        //$(".education-entry:last").append(formattedUrl);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDate);
        $(".education-entry:last").append(formattedonlineURL);
    }
}
education.display();

var projects = {
    "projects": [{
        "title": "Building a Portfolio Site",
        "dates": "10/23/2015-11/23/2015",
        "description": "First project after learning basic HTML & CSS, where I learned and built a responsive Portfolio Website.  This was also a website mockup that was completed to course's standards",
        "url": "https://github.com/matosb2/P1.git",
        "images": ["images/project.jpg"]
    }]
}

projects.display = function () {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);
    };
};
projects.display();

$("#mapDiv").append(googleMap);