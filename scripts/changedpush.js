window.getCookie = function(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}
var animname = getCookie("animname");
var elem1 = document.getElementById("imgprogrammer");
elem1.className = "animate__animated animate__" + animname;
console.log(elem1.className);