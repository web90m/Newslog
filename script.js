function showMessage() {
    alert("Hello! Welcome to my website 🚀");
}

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    document.getElementById("result").innerText =
        "Thank you " + name + "! Your message has been sent.";

    return false; // prevent page refresh
}
