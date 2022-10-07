function calc() {
  var amount = document.getElementById("amount").value;
  var per = document.getElementById("percent").value;
  var persons = document.getElementById("persons").value;
  let tip = ((amount * per) / 100);

  if (amount == "") {
    alert("אנא מלא את סכום הארוחה");
    return;
  } else if (
   persons == "") {
    alert(" אנא השלם את כמות הסועדים");
    return;

  } else if (tip == "") {
    alert("אנא השלם את אחוז הטיפ");
    return;

  } 
  else {
   
    document.getElementById("tip").innerHTML =
      " סכום הטיפ הינו " + "<br>" + tip + "&nbsp" + " ש״ח";

    let f_bill =((+amount + +tip) / persons);

    tab = (f_bill * persons).toFixed(1);

    document.getElementById("finel").innerHTML =
      "הסכום לתשלום לכל סועד  הינו" + "&nbsp" + f_bill + "&nbsp" + "ש״ח";

      document.getElementById("tab").innerHTML =  'סה"כ לתשלום ' + "&nbsp" + tab + "&nbsp" + "ש״ח";
  }
}
