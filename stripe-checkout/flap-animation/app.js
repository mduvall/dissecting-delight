var showInputEl = document.getElementById("show-form");

showInputEl.addEventListener("click", function(e) {
  var description = document.getElementsByClassName("description")[0];
  description.className = e.target.checked ? "description expanded" : "description hidden";
});
