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

document.addEventListener("DOMContentLoaded", function() {
    const typewriterText = document.querySelector(".typewriter_text");
    const texts = ["Data", "Systems", "Business", "Business Systems", "Business Intelligence", "Marketing", "Program"];
    let index = 0;

    function updateText() {
        typewriterText.textContent = texts[index++];
        typewriterText.classList.remove("animated"); // Reset animation
        setTimeout(() => {
            typewriterText.classList.add("animated"); // Start animation
        }, 0); // Immediately trigger re-adding for animation effect

        if (index >= texts.length) index = 0;
    }

    updateText(); // Run immediately on load
    setInterval(updateText, 4000); // Update text every 4 seconds
});