const toggleBtnEle = document.getElementById("ToggleBtn");
const navContainerEle = document.getElementById("NavmenuContainer");
const btn = document.getElementById("btn");

// console.log(toggleBtnEle);

toggleBtnEle.addEventListener("click", (e) => {
  navContainerEle.classList.toggle("navmenucontainer-open");

  toggleBtnEle.classList.toggle("toggle-btn-close");
});

// DOM
const menuItemEle = document.querySelectorAll(".menu-item");
console.log(menuItemEle);

btn.addEventListener("mouseover", function () {
  const colors = ["red", "yellow", "purple", "cyan", "green"];

  const colorIndex = Math.floor(Math.random() * colors.length);

  const color = colors[colorIndex];

  document.body.style.background = color;
});
