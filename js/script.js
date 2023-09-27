document.getElementById("button").addEventListener("click", function() {
    let name = document.forms["contact-form"]["your-name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let interest = document.forms["contact-form"]["interest"].value;
    
    if (name == "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong";
    } else {
        document.getElementById("error-name").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("error-email").innerHTML = "Email tidak boleh kosong";
    } else {
        document.getElementById("error-email").innerHTML = "";
    }

    if (!interest) {
        document.getElementById("error-interest").innerHTML = "Hobi tidak boleh kosong";
    } else {
        document.getElementById("error-interest").innerHTML = "";
    }


})