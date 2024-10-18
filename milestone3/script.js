// Get references to the form and display 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle formsubmission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var location = document.getElementById('location').value;
    var about = document.getElementById('about').value;
    console.log("Location:", "".concat(location));
    console.log("About:", "".concat(about));
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n        <h2><b> Resume </b></h2>\n        <h3> Personal Information </h3>\n        <p><b> Name: </b> ".concat(name, "</P>\n        <p><b> Email: </b> ").concat(email, "</P>\n        <p><b> PhoneNumber: </b> ").concat(phonenumber, "</P>\n        <p><b> Location: </b> ").concat(location, "</P>\n        <hr/>\n        <h3> About </h3>\n        <p>").concat(about, "</p>\n        <hr/> \n        <h3> Education </h3>\n        <p>").concat(education, "</p>\n        <hr/>\n        <h3> Experience </h3>\n        <p>").concat(experience, "</p>\n        <hr/>\n        <h3> Skills </h3>\n        <p>").concat(skills, "</p>\n     ");
    //  Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
