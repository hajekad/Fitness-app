

function printAll(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var bdate = document.getElementById("bdate").value;
    var height = document.getElementById("height").value;
    var gender = document.getElementById("gender").value;
    console.log(gender);
    var data = "https://localhost:7053/api/persons/" + name + " " + email + " " + pass + " " + bdate + " " + height.toString() + " " + gender;
    console.log(data);
    const response = fetch(data, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: null
    });
    console.log(response);

    
}
