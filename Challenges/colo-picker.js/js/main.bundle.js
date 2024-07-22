"use strict";

var color = document.querySelector("#color");
var output = document.querySelector("#output");
color.addEventListener("input", function () {
  var selected = color.value;
  output.innerHTML = selected;
  output.style.background = selected;
  output.style.color = '#fff';
});