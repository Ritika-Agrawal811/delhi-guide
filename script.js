const hamburgerMenu = document.getElementById("hamburgerMenu");

// show mobile menu
hamburgerMenu.addEventListener("click", () => {
  const menuList = document.getElementById("menuList");
  menuList.classList.toggle("show");
});
