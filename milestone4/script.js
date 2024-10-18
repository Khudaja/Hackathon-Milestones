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
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n        <h2><b> Editable Resume </b></h2>\n        <h3> Personal Information </h3>\n        <p><b> Name: </b><span contenteditable\"true\"> ".concat(name, " </span></p> \n        <p><b> Email: </b><span contenteditable\"true\"> ").concat(email, " </span></p>\n        <p><b> PhoneNumber: </b><span contenteditable\"true\"> ").concat(phonenumber, " </span></p>\n        <p><b> Location: </b><span contenteditable\"true\"> ").concat(location, " </span></p>\n        <hr/>\n        <h3> About </h3>            \n        <p contenteditable\"true\">").concat(about, "</p>\n        <hr/> \n        <h3> Education </h3>\n        <p contenteditable\"true\">").concat(education, "</p>\n        <hr/>\n        <h3> Experience </h3>\n        <p contenteditable\"true\">").concat(experience, "</p>\n        <hr/>\n        <h3> Skills </h3>\n        <p contenteditable\"true\">").concat(skills, "</p>\n     ");
    //  Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
