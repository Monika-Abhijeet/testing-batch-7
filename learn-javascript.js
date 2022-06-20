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
// array of string
let alphabets = ["A", "B", "C", "D", "E"];
console.log(alphabets[4]);

let employee = {
  name: "monika",
  age: 28,
  phno: 12324,
  email: "abc@gmail.com",
};
console.log(employee.phno);

// var num = prompt("Enter number");
// if (num > 0) {
//   alert("given number is positive");
// } else {
//   alert("given number is not positive");
// }
// var password = prompt("enter password");
// if (password.length === 0) {
//   alert("pls enter password");
// } else if (password.length < 5) {
//   alert("week password");
// } else if (password.length > 12) {
//   alert("password too long");
// } else {
//   alert("good password");
// }

// let day = prompt("Enter a number between 1 to 7");
// switch (day) {
//   case "1":
//     alert("Sunday");
//     break;
//   case "2":
//     alert("Monday");
//     break;
//   case "3":
//     alert("Tuesday");
//     break;
//   case "4":
//     alert("Wednesday");
//     break;
//   case "5":
//     alert("Thursday");
//     break;
//   case "6":
//     alert("Friday");
//     break;
//   case "7":
//     alert("Saturday");
//     break;
//   default:
//     alert("not a week day");
//     break;
// }

for (i = 10; i <= 20; i++) {
  console.log(i * 5);
}
