//delete student btn ekata eka
function deleteById(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/student/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => location.reload())
    .catch((error) => console.log("error", error));
}