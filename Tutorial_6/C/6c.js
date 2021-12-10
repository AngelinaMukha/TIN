function checkForm(){
    const form = document.querySelector('#signup-form');
    const number = document.querySelector("#number");
    const email_element = document.querySelector("#email");
    const num = number.value;
    const email = email_element.value;

    let number_error = true, email_error = true;
    const emailPattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

    if (num.trim() === "") {
        setColor(false, number);
        number_error = false;
    } else {
        setColor(true, number);
    }

    if ((email.trim() === "") || (!emailPattern.test(String(email).toLowerCase()))) {
        setColor(false, email_element);
        email_error = false;
    } else { 
        setColor(true, email_element);
    }

    return number_error && email_error;
}

function setColor(isWright, el) {
    if (isWright === true) {
        el.style["background-color"] = "green";      
    } else if (isWright == false) {
        el.style["background-color"] = "red";    
    }
}