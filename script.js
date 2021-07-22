var button = document.getElementById("generateScript");
var lizard = document.getElementById("lizard");

if(lizard){
  lizard.style.display = "none";
}

if(button){
  button.addEventListener("click", makeScript);
}

function makeScript(){
  var name = document.getElementById("name").value;
  var place = document.getElementById("place").value;
  var repName = document.getElementById("repName").value;
  if(lizard) {
  //lizard.innerHTML = 'Hello, Representative or Senator' + repName + '. My name is ' + name + ' and I am from ' + place + '. I am calling to express my support of an educational voucher program for ' + place '.';
  lizard.style.display = "block";
  lizard.innerHTML = `Hello, Representative/Senator ${repName}. My name is ${name} and I am from ${place}. I am calling to express my support of an educational voucher program for ${place}. Currently, less than half of U.S. school-aged kids are proficient in math or reading. In areas with less-than-quality public schools, educational voucher programs have been shown to increase math and reading proficiency for students of all ages and backgrounds. I urge you to consider an educational voucher program for ${place}. Thank you for your time.`
  }
  
}

