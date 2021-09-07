// Target the switch
const toggleSwitch = document.querySelector("input[type='checkbox']");
// What we want to change when the switch is checked.
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");


// Dark or Light Images
const imageMode = color => {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}


const toggleDarkLightMode = isLight => {
    nav.style.backgroundColor = isLight ? "rgb(255 255 255 / 90%)" : "rgb(0 0 0 / 90%)";
    textBox.style.backgroundColor = isLight ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
    isLight ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun") :
              toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    isLight ? imageMode("light") : imageMode("dark");
};


// Switch the theme dynamically | To save our theme we will use the Window.localStorage.
const switchTheme = (event) => {
    // event.target.checked gives true if checked and false if it's not checked.
    if (event.target.checked) {
        // We add the data-theme attribute to the root (document.documentElement) of the document.
        document.documentElement.setAttribute("data-theme", "dark");
        // Set a value to local storage
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode(false);
    } else {
        // We don't have specific values for the "light" data-theme.
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleDarkLightMode(true);
    }
};

// We will use the onchange event
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem("theme");

// If the key-value pair exists at the local storage
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}
