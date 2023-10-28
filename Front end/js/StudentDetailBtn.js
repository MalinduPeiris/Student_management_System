function Stude(){

    let deValue=document.getElementById();
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:8080/student/Sharada", requestOptions)
.then((response) => response.json())
.then((result) => {
    result.forEach((element) => {
        body += ` <tr>
                    <td height="50" class="hh">
                        ${element.id}
                    </td>
                    <td height="50" class="hh">
                        ${element.firstName}
                    </td>
                    <td class="hh">
                        ${element.age}
                    </td>
                    <td class="hh">
                        ${element.gender}
                    </td>
                    <td class="hh" width="200">
                            <button class="delete-btn" onclick="deleteById(${element.id})" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                            </button>
                    </td>
                </tr>`;
    });
    tabale.innerHTML = body;
})
.catch((error) => console.log("error", error));

}