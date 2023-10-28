//main table eka details ekata log unaama ena eka
function student(firstname , lastname , phoneNumber , email , city , age , gender) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.city = city;
    this.age = age;
    this.gender = gender;
}




const studentTable = document.getElementById("stu-table");

function StuTbl1(){
 
fetch("http://localhost:8080/student")
  .then((response) => response.json())
  .then((res) => {
    let tblBody = `
    <tr class="TblTh">
    <th class="TblTh" width="100" >    ID             </th>
    <th class="TblTh" width="160" >    First Name     </th>
    <th class="TblTh" width="170" >    Last Name      </th>
    <th class="TblTh" width="180" >    Number         </th>
    <th class="TblTh" width="230" >    Email          </th>
    <th class="TblTh" width="230" >    City          </th>
    <th class="TblTh" width="140" >    Age            </th>
    <th class="TblTh" width="100" >    Gender         </th>
</tr>`;

    res.forEach((element) => {
      tblBody += `<tr class="TblTr">
    <td class="TblThTd" height="70">  ${element.id}  </td>
    <td class="TblThTd">    ${element.firstName}     </td>
    <td class="TblThTd">    ${element.lastName}      </td>
    <td class="TblThTd">    ${element.phoneNumber}        </td>
    <td class="TblThTd">    ${element.email}         </td>
    <td class="TblThTd">    ${element.city}         </td>
    <td class="TblThTd">    ${element.age}           </td>
    <td class="TblThTd">    ${element.gender}        </td>

    <td class="TblThTd" width="90">
        <button class="delete-btn" onclick="deleteById(${element.id})" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
        </button>
    </td>

</tr> `;
    

    });

        studentTable.innerHTML = tblBody;

    });

}


