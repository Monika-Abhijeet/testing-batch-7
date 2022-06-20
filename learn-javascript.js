function changeName() {
  document.getElementById("text").innerHTML = "Monika Abhijeet";
  document.getElementById("text").style.fontSize = "50px";
  document.getElementById("text").style.color = "blue";
}

function replaceData() {
  document.write("heyyy i ahve replaced entire screen");
}

function add() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var result = parseInt(a) + parseInt(b);

  document.getElementById("result").innerHTML = result;
}

function subtract() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var result = parseInt(a) - parseInt(b);

  document.getElementById("result").innerHTML = result;
}

function multiply() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var result = parseInt(a) * parseInt(b);

  document.getElementById("result").innerHTML = result;
}

function divide() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var result = parseInt(a) / parseInt(b);

  document.getElementById("result").innerHTML = result;
}
