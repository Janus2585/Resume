var bio = {
    "name": "Blake",
    "role": " Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "example@gmail.com",
        "github": "https://github.com/Janus2585",
        "LinkedIn": 'https://www.linkedin.com/in/blake-younger-54463abb',
        "location": "Taos Cooperative, Austin, Texas"
    },
    "welcomeMessage": "I am currently searching for an engineering internship, co-op, or fulltime position. To contact me, please send a message through LinkedIn.</a>",
    "skills": ["MATLAB", " C++", "Unmanned Aerial Vehicle Hardware and Avionics", "Structural Analysis using ABAQUS", "Low Speed Aerodynamics", "Leadership", "Front End Web Development", "Compressible Fluid Flow", "Aircraft Propulsion", "GitHub", "Mission Planner", "Aircraft Design"],
    "biopic": "images/bioPic.jpg",
    "display": function() {
        var name = "Blake Younger";
        //function inName(name) {
         //   var splitName = name.split(" ");
         //   splitName[splitName.length - 1] = splitName[splitName.length - 1].toUpperCase();
         //   return splitName[0] + " " + splitName[1];
        //}
        //var myInName = inName(name);
        var formattedName = HTMLheaderName.replace("%data%", name);
        var role = "            Aerospace Engineer, Web Developer";
        var formattedRole = HTMLheaderRole.replace("%data%", role);

        $("#header").prepend([formattedRole]);
        $("#header").prepend([formattedName]);
        $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }

        /*  Header Contacts
        $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn));
        $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
        */ 

        //footer contacts
        //$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        //$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "NewSpace Global",
        "title": "Analyst Intern",
        "dates": "Summer of 2015",
        "location": "Taos Cooperative, Austin, Texas",
        "img": "http://newspaceglobal.com/sites/newspaceglobal.com/files/nsg_logo.png",
        "description": "Analyze privately held companies involved in the commercialization of space using NSG’s 4 Screen system of analysis i.e. management, market, capitalization, and technology. Present analyses to Senior Analysts during conference call for peer review, then add companies to NSG’s indices. Write detailed articles, based on the 4 Screen analysis, which cover new additions to the indices and major events in the industry for NSG’s daily news publication, NewSpace Watch. Organize, conduct, and publish interviews with C-level executives of emerging companies in the NewSpace sector.",
        "dates": "May 2015 to August 2015"
    }, {
        "employer": "University of Texas Unmanned Aerial Vehicle Team",
        "title": "Program Manager",
        "dates": "January 2016 to Present",
        "location": "Woolrich Laboratory, Austin, Texas",
        "img": "http://newspaceglobal.com/sites/newspaceglobal.com/files/nsg_logo.png",
        "description": "I love working with my team to prepare for AUVSI UAV competition in June. The 20 active members are split into 3 teams: Configuration, ConOps, and Data Processing. The Configuration team works on all of the hardware and avionics on board. The ConOps team designs missions in Mission Planner. The Data Processing team writes MATLAB scripts to automatically classify and record the location of targets on the ground. I hold weekly meetings with the team leads to ensure we are meeting our goals on schedule. We are motivated to prove to other universities why UT engineers are some of the best in the world.",
        "dates": "January 2016 to Present"
    }],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {

            if (job.employer && job.title) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
            }
            if (job.location) {
                $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            }
            if (job.dates) {
                $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            }
            if (job.description) {
                $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
            }
        });
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "AUVSI SUAS Competition 2016",
        "dates": "June 15 - June 19 2016",
        "description": "AUVSI SUAS Competition. We scored 15th out of 43 teams.",
        "images": ["images/20160616_122626.jpg", "images/20160618_095755.jpg", "images/20160618_095253.jpg"]
    }, {
        "title": "Finite Element Analysis of a Beam with Uniaxial Loading",
        "dates": "May 2016",
        "description": "Due to the symmetry of the beam, the  stress distribution can be determined by analyzing a quater section.",
        "images": ["images/stressSketch.jpg", "images/stressFEM.jpg", "images/stressDiagram.jpg"]
    }, {
        "title": "Electromechanical Systems Laboratory Final Project",
        "dates": "December 2015",
        "description": "Analysis of the Insulating Properties of a Styrofoam Box. This was used to simulate the payload temperature of a weather balloon.",
        "images": ["images/thermistorCircuit.jpg", "images/thermistorCalib.jpg", "images/thermistorTime.jpg"]
    }],

    "display": function() {
        $("#projectExperience").append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "University of Texas at Austin",
        "location": "University of Texas, Austin, Texas",
        "degree": "Bachelor of Science",
        "majors": ["Aerospace Engineering with Atmospheric Flight Specialization"],
        "dates": "Class of 2017",
        "url": "website"
    }],

    "onlineCourses": [{
        "title": "Front End Web Development Degree",
        "school": "Udacity",
        "dates": "January 2016 - October 2016",
        "url": ""
    }],

    "display": function() {
        //School display
        $("#schoolExperience").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedName);

            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedMajor);
        });

        //Online course display
        //$("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        education.onlineCourses.forEach(function(course) {

            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedTitle + " " + formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedURL);
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);

