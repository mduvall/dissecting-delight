var buttonEl = document.getElementsByClassName("submit")[0],
    helloEl = document.getElementsByClassName("hello-container")[0],
    goodbyeEl = document.getElementsByClassName("goodbye-container")[0];

buttonEl.addEventListener("click", function() {
  helloEl.classList.add("slide-out");
  goodbyeEl.classList.add("slide-in");
});
