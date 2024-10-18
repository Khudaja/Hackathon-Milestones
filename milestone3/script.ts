// Get references to the form and display 
const form = document.getElementById ('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle formsubmission
form.addEventListener('submit' , (event:Event) =>{
    event.preventDefault(); //prevent page reload

    // collect input values
    const name =(document.getElementById ('name') as HTMLInputElement).value;
    const email =(document.getElementById ('email') as HTMLInputElement).value;
    const phonenumber =(document.getElementById ('phonenumber') as HTMLInputElement).value;
    const location =(document.getElementById ('location') as HTMLInputElement).value;
    const about =(document.getElementById ('about') as HTMLTextAreaElement).value;
    const education =(document.getElementById ('education') as HTMLTextAreaElement).value;
    const experience =(document.getElementById ('experience') as HTMLTextAreaElement).value;
    const skills =(document.getElementById ('skills') as HTMLTextAreaElement).value;

    // generate the resume content dynamically
     const resumeHTML =`
        <h2><b> Resume </b></h2>
        <h3> Personal Information </h3>
        <p><b> Name: </b> ${name}</p> 
        <p><b> Email: </b> ${email}</p>
        <p><b> PhoneNumber: </b> ${phonenumber}</p>
        <p><b> Location: </b> ${location}</p>
        <hr/>
        <h3> About </h3>            
        <p>${about}</p>
        <hr/> 
        <h3> Education </h3>
        <p>${education}</p>
        <hr/>
        <h3> Experience </h3>
        <p>${experience}</p>
        <hr/>
        <h3> Skills </h3>
        <p>${skills}</p>
     `;
    //  Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML= resumeHTML;
    }else{
        console.error('The resume display element is missing.')
    }
})