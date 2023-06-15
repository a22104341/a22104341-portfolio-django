function darkLightMode() {
    const darkLightButton = document.getElementById("darkLight")

    const bodyText = document.getElementById("body")
    /* nav */
    const nav = document.getElementById("nav")
    const dropbtnText = document.getElementById("dropbtn")
    const dropdownContentText = document.getElementById("dropdown-content")
    const dropdownContentText1 = document.getElementById("dropdown-content1")
    const dropdownContentText2 = document.getElementById("dropdown-content2")
    const dropdownContentText3 = document.getElementById("dropdown-content3")
    const dropbtn1Text = document.getElementById("dropbtn1")
    const dropbtn2Text = document.getElementById("dropbtn2")
    /* footer */
    const footer = document.getElementById("footer")
    const f1 = document.getElementById("f1")
    const f4 = document.getElementById("f4")
    const date = document.getElementById("date")

    /* this stuff */
    const container = document.getElementById("yessssssssssssssssssssss")
    const video = document.getElementById("stufffffffff")
    if (darkLightButton.src.match("darkmodeImage/darkmode.png")) {
        darkLightButton.src = "darkmodeImage/lightmode.png"
        bodyText.style.color = "white"

        nav.style.backgroundColor = "darkblue"
        dropbtnText.style.color = "white"
        dropbtnText.style.backgroundColor = "darkblue"
        dropbtn1Text.style.color = "white"
        dropbtn1Text.style.backgroundColor = "darkblue"
        dropbtn2Text.style.color = "white"
        dropbtn2Text.style.backgroundColor = "darkblue"

        footer.style.color = "white"
        footer.style.backgroundColor = "darkblue"
        f1.style.color = "white"
        f2.style.color = "white"
        f3.style.color = "white"
        f4.src = "FooterImgs/Github_White.png"
        f5.style.color = "white"

        /*stuff */
        container.style.backgroundColor = "black"
        container.style.color = "white"
        video.style.backgroundColor = "black"
        video.style.color = "white"

        toggleDarkMode();
    } else {
        darkLightButton.src = "darkmodeImage/darkmode.png"
        bodyText.style.color = "black"

        nav.style.backgroundColor = "lightblue"
        dropbtnText.style.color = "black"
        dropbtnText.style.backgroundColor = "lightblue"
        dropbtn1Text.style.color = "black"
        dropbtn1Text.style.backgroundColor = "lightblue"
        dropbtn2Text.style.color = "black"
        dropbtn2Text.style.backgroundColor = "lightblue"
        dropdownContentText.style.color = "black"
        dropdownContentText1.style.color = "black"
        dropdownContentText3.style.color = "black"


        footer.style.color = "black"
        footer.style.backgroundColor = "lightblue"
        f1.style.color = "black"
        f2.style.color = "black"
        f3.style.color = "black"
        f4.src = "FooterImgs/Github.png"
        f5.style.color = "black"

        /*stuff */
        container.style.backgroundColor = "white"
        container.style.color = "black"
        video.style.backgroundColor = "white"
        video.style.color = "black"

        toggleDarkMode();
    }
}

function videoVisibility() {
    const video = document.getElementById("video")
    const button = document.getElementById("leButton")
    opacity = window.getComputedStyle(video).getPropertyValue("opacity");

    if (opacity == 1) {
        video.style.opacity = 0;
        button.textContent = "make video visible"
    } else {
        video.style.opacity = 1;
        button.textContent = "make video invisible"
    }
}

function scrollThis() {
    document.getElementById("leButton").scrollIntoView()
    videoVisibility()
}

function applyDarkMode() {
    if (localStorage.getItem('darkMode')) {
        // User has enabled dark mode previously
        darkLightMode();
        document.body.classList.add('dark-mode');
    }
}

window.onload = function () {
    applyDarkMode();
};

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    // Save user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', true);
    } else {
        localStorage.removeItem('darkMode');
    }
}