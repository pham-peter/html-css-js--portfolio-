function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    /* this targets the .menu-links element in the index.html */
    const icon = document.querySelector(".hamburger-icon");
    /* same as above */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeIconLI(isHovering) {
    var icon = document.getElementById('contactLIIcon');
    if (isHovering) {
        icon.src = 'linkedin-app-icon.svg'; // This is the hover icon
    } else {
        icon.src = 'linkedin-square-icon.svg'; // This is the original icon
    }
}

function changeIconE1(isHovering) {
    var icon = document.getElementById('emailIcon1');
    if (isHovering) {
        icon.src = 'envelope-open.svg'; // This is the hover icon
    } else {
        icon.src = 'envelope-simple.svg'; // This is the original icon
    }
}

function changeIconE2(isHovering) {
    var icon = document.getElementById('emailIcon2');
    if (isHovering) {
        icon.src = 'envelope-open-fill.svg'; // This is the hover icon
    } else {
        icon.src = 'envelope-simple-fill.svg'; // This is the original icon
    }
}

const text = document.querySelector(".typewriter_text");
const textLoad = () => {
    text.classList.remove("animated");  // Reset animation
    setTimeout(() => {
        text.textContent = "Data";
        text.classList.add("animated");  // Start animation
    }, 0);
    setTimeout(() => {
        text.textContent = "Systems";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Business";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Business Systems";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Business Intelligence";
    }, 16000);
    setTimeout(() => {
        text.textContent = "Marketing";
    }, 20000);
    setTimeout(() => {
        text.textContent = "Program";
    }, 24000);
}

textLoad();
setInterval(textLoad, 28000);

/* this needs to be 28000, or +4000 as the original*/
const text = document.querySelector(".typewriter_text");
const texts = ["Data", "Systems", "Business", "Business Systems", "Business Intelligence", "Marketing", "Program"];
let index = 0;

function updateText() {
    text.textContent = texts[index++];
    if (index >= texts.length) index = 0;
    setTimeout(() => {
        requestAnimationFrame(updateText);
    }, 4000);  // Continue scheduling each update at the right time
}

requestAnimationFrame(updateText);

