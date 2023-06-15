

/* Languages*/
function makePercentageVisible() {
    const text = document.getElementsByClassName("percentage")[0];
    text.style.opacity = "1";
}
function makePercentageVisible1() {
    const text = document.getElementsByClassName("percentage")[1];
    text.style.opacity = "1";
}
function makePercentageVisible2() {
    const text = document.getElementsByClassName("percentage")[2];
    text.style.opacity = "1";
}
function makePercentageVisible3() {
    const text = document.getElementsByClassName("percentage")[3];
    text.style.opacity = "1";
}
function makePercentagesVisible() {
    makePercentageVisible()
    makePercentageVisible1()
    makePercentageVisible2()
    makePercentageVisible3()
}

function makePercentageInvisible() {
    const text = document.getElementsByClassName("percentage")[0];
    text.style.opacity = "0";
}
function makePercentageInvisible1() {
    const text = document.getElementsByClassName("percentage")[1];
    text.style.opacity = "0";
}
function makePercentageInvisible2() {
    const text = document.getElementsByClassName("percentage")[2];
    text.style.opacity = "0";
}
function makePercentageInvisible3() {
    const text = document.getElementsByClassName("percentage")[3];
    text.style.opacity = "0";
}
function makePercentagesInvisible() {
    makePercentageInvisible()
    makePercentageInvisible1()
    makePercentageInvisible2()
    makePercentageInvisible3()
}











function barMovement() {
    const progressBar = document.getElementsByClassName("progressBar1")[0];
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
        progressBar.style.setProperty("--width", width + .1);
    }, 8);
}

function barMovement1() {
    const progressBar = document.getElementsByClassName("progressBar4")[0];
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
        progressBar.style.setProperty("--width", width + .1);
    }, 8);
}

function barMovement2() {
    const progressBar = document.getElementsByClassName("progressBar2")[0];
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
        progressBar.style.setProperty("--width", width + .1);
    }, 8);
}

function barMovement3() {
    const progressBar = document.getElementsByClassName("progressBar3")[0];
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
        progressBar.style.setProperty("--width", width + .1);
    }, 14);
}
function barMovements() {
    let date = document.getElementById("date")
    date.innerHTML = new Date().getFullYear();


    barMovement()
    barMovement1()
    barMovement2()
    barMovement3()
    setInterval(() => makePercentagesVisible(), 3000)
}

function resetBar1() {
    const progressBar = document.getElementsByClassName("progressBar1")[0]
    progressBar.style.setProperty("--width", 0)
}

function resetBar2() {
    const progressBar = document.getElementsByClassName("progressBar2")[0]
    progressBar.style.setProperty("--width", 0)
}

function resetBar3() {
    const progressBar = document.getElementsByClassName("progressBar3")[0]
    progressBar.style.setProperty("--width", 0)
}

function resetBar4() {
    const progressBar = document.getElementsByClassName("progressBar4")[0]
    progressBar.style.setProperty("--width", 0)
}

function resetBars() {
    resetBar1()
    resetBar2()
    resetBar3()
    resetBar4()
}

function darkLightMode() {
    const darkLightButton = document.getElementById("darkLight")

    const backGroundMe = document.getElementById("backgroundME")
    const austria = document.getElementById("qualities_etc")
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
    /* phrase */
    const phrase = document.getElementById("phrase")
    const phraseButton = document.getElementById("phraseButton")
    const phraseButtonText = document.getElementById("phraseButtonText")

    const lang = document.getElementById("lang")
    const progLang = document.getElementById("progLang")
    const other = document.getElementById("other")

    const progressbar1 = document.getElementById("progressbar1")
    const progressbar2 = document.getElementById("progressbar2")
    const progressbar3 = document.getElementById("progressbar3")

    if (darkLightButton.src.match("../images/darkmode.png") /*|| !sessionStorage.getItem("darkmode")*/) {
        darkLightButton.src = "../images/lightmode.png"
        backGroundMe.style.backgroundImage = 'url("../images/darkMe.png")'
        austria.style.backgroundImage = 'url("../images/Austria_Dark.png")'
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
        f4.src = "../images/Github_White.png"
        f5.style.color = "white"

        phrase.style.backgroundColor = "darkblue"
        phraseButton.style.backgroundColor = "turquoise"
        phraseButtonText.style.color = "black"
        phraseButtonText.style.fontWeight = "bold"

        lang.style.color = "white"
        progLang.style.color = "white"
        other.style.color = "white"

        /* progressbars */
        progressbar1.style.color = "darkblue"
        progressbar1.style.backgroundColor = "black"
        progressbar2.style.color = "darkblue"
        progressbar2.style.backgroundColor = "black"
        progressbar3.style.color = "darkblue"
        progressbar3.style.backgroundColor = "black"
        progressbar4.style.color = "darkblue"
        progressbar4.style.backgroundColor = "black"

        toggleDarkMode();
    } else {
        darkLightButton.src = "../images/darkmode.png"
        backGroundMe.style.backgroundImage = 'url("../images/backgroundME.png")';
        austria.style.backgroundImage = 'url("../images/Austria_White.png")'
        bodyText.style.color = "black"

        nav.style.backgroundColor = "lightblue"
        dropbtnText.style.backgroundColor = "lightblue"
        dropbtn1Text.style.color = "white"
        dropbtn1Text.style.backgroundColor = "lightblue"
        dropbtn2Text.style.color = "white"
        dropbtn2Text.style.backgroundColor = "lightblue"
        dropdownContentText.style.color = "black"
        dropdownContentText1.style.color = "black"
        dropdownContentText3.style.color = "black"

        footer.style.color = "black"
        footer.style.backgroundColor = "lightblue"
        f1.style.color = "black"
        f2.style.color = "black"
        f3.style.color = "black"
        f4.src = "../images/Github.png"
        f5.style.color = "black"

        phrase.style.backgroundColor = "lightblue"
        phraseButton.style.backgroundColor = "black"
        phraseButtonText.style.color = "white"
        phraseButtonText.style.fontWeight = "normal"

        lang.style.color = "black"
        progLang.style.color = "black"
        other.style.color = "black"

        /* progressbars */
        progressbar1.style.color = "black"
        progressbar1.style.backgroundColor = "white"
        progressbar2.style.color = "black"
        progressbar2.style.backgroundColor = "white"
        progressbar3.style.color = "black"
        progressbar3.style.backgroundColor = "white"
        progressbar4.style.color = "black"
        progressbar4.style.backgroundColor = "white"


        toggleDarkMode();
    }
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