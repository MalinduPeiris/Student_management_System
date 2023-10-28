function submit() {
 

    let firstname = document.getElementById("inputfirstname").value;
    let lastname = document.getElementById("inputlastname").value;
    let phoneNumber = document.getElementById("inputnum").value;
    let email = document.getElementById("inputmail").value;
    let password = document.getElementById("inputpassword2").value;
    let city = document.getElementById("inputcity").value;
    let age = document.getElementById("inputage").value;
    let gender = document.getElementById("gender").value;
  
    let jsObj = new Student(firstname , lastname , phoneNumber , email , password ,city , age , gender);
  
    let jsonObj = JSON.stringify(jsObj);
  
    console.log(jsonObj);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //location.reload();
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: jsonObj,
      redirect: "follow",
    };
  
    
    
    fetch("http://localhost:8080/student", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  