function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
var p1 = 3;
var p2 = 8;
document.getElementById("button2").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  var answer = a * b;
  document.getElementById("bonus").innerHTML = answer;
}