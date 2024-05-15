
function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
};
 

//fucntion to check if the form is valid 
//get the value of Name, Email, and Message Fields
function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    //checks if email field is empty 
    if (!email) {
        alert('Please enter your email.');
        return false;
    }
//// Define pattern to allow only letters and spaces
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name) || !namePattern.test(message)) {
        alert('Name should contain only letters.');
        return false;
    }
//return true if the form is valid 
    return true;
}

document.querySelector('form').addEventListener('submit', function(event) {
    //if form is not valid, prevents the default form submission 
    if (!validateContactForm()) {
        event.preventDefault();

    }else{
        alert('Thank you for submitting the form')
    }
    
});
