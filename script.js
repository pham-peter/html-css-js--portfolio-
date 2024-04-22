function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    /* this targets the .menu-links element in the index.html */
    const icon = document.querySelector(".hamburger-icon");
    /* same as above */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}