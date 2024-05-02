document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector("nav ul.menu");

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    const menuItems = document.querySelectorAll("nav ul.menu li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("active");
        });
    });
});
