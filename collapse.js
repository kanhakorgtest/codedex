const collapsablePane = document.querySelectorAll(".collapsible");

collapsablePane.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);