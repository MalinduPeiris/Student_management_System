const inputfirstname = document.getElementById('inputfirstname');
const inputlastname = document.getElementById('inputlastname');
const inputnum = document.getElementById('inputnum');
const inputmail = document.getElementById('inputmail');
const inputpassword2 = document.getElementById('inputpassword2');
const city = document.getElementById("inputcity");
const inputage = document.getElementById('inputage');
const gender = document.getElementsByName('gender');


const signupbtndetails = document.getElementById('signupbtndetails');
signupbtndetails.addEventListener("click", () => {

    

    let selectedGender;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) 
            selectedGender = gender[i].value;
        
    }

    let info = {
        "firstName": inputfirstname.value,
        "lastName": inputlastname.value,
        "phoneNumber": inputnum.value,
        "email": inputmail.value,
        "password" : inputpassword2.value,
        "city" : inputcity.value,
        "age": inputage.value,
        "gender": selectedGender
    }

    fetch("http://localhost:8080/student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
})
})