// initialize variables
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.getElementById('btn')


// adding eventlistner
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    validateForm()
})

// validating form
function validateForm() {
    if (firstName != "" && lastName != "" && email != "" && password != "") {
         // trim values to remove whitespaces
        const firstNameValue = firstName.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        console.log(firstName.value)
        console.log(lastName.value)
        console.log(email.value)
        console.log(password.value)


    } else {
        return false
        console.log('Fill in the inputs!')

    }
}









