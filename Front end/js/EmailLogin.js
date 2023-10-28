
const email=document.getElementById("inputemail1");
const password=document.getElementById("inputpassword1");
const btnLogin=document.getElementById("btn-login");

btnLogin.addEventListener('click',()=>{
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`http://localhost:8080/student/${email.value}/${password.value}`, requestOptions)
    .then((response) => response.json())
    .then(res=>{
      console.log(res);
      if(res===true){
         window.open("../detail.html" ,"_top");
      }else{
         alert("Incorrect Email Password..    Please Enter A Valid Email Password ");
    }})
})

