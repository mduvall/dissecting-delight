var shakeBtnEl = document.getElementById("btn-shake");

shakeBtnEl.addEventListener("click", function(e) {
  var boxEl = document.getElementsByClassName("easing-box")[0];
  boxEl.classList.remove("shake");
  boxEl.offsetWidth = boxEl.offsetWidth;
  boxEl.classList.add("shake");
});
