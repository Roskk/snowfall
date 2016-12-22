var btns = document.querySelectorAll(".buttons button");
var image1 = document.getElementsByClassName("image1")[0];

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageClasses);
}

function manageClasses() {
  if (this.getAttribute("data-add")) {
    image1.classList.add(this.getAttribute("data-add"));
  }
  if (this.getAttribute("data-remove")) {
    image1.classList.remove(this.getAttribute("data-remove"));
  }
}