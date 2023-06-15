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

        bodyText.style.backgroundColor = "black"
        bodyText.style.color = "white"

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
        bodyText.style.backgroundColor = "white"
        bodyText.style.color = "black"

        toggleDarkMode();
    }
}

const inputBox = document.getElementById('leTextBox');
const sentenceOnTop = document.getElementById('sentenceOnTop');

inputBox.addEventListener('input', () => {
    const sentence = inputBox.value.slice(0, 20);
    sentenceOnTop.textContent = sentence;
});

inputBox.addEventListener('keydown', (event) => {
    if (inputBox.value.length >= 20 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});


const inputName = document.getElementById('input-name');
const outputNames = document.querySelectorAll('.output-name');

inputName.addEventListener('input', () => {
    const name = inputName.value.slice(0, 20);

    outputNames.forEach((outputName) => {
        outputName.textContent = name;
    });
});

inputName.addEventListener('keydown', (event) => {
    if (inputName.value.length >= 20 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});



const circle = document.getElementById('circle');

circle.onmouseout = function () {
    circle.style.animationPlayState = 'running';
}

circle.onmouseover = function () {
    circle.style.animationPlayState = 'paused';
}



// Calculator functions
const inputMath = document.getElementById("inputMath");

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        inputMath.value += button.value;
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        inputMath.value += button.value;
    });
});

document.getElementById("equal").addEventListener("click", () => {
    inputMath.value = eval(inputMath.value);
});

document.getElementById("delete").addEventListener("click", () => {
    inputMath.value = inputMath.value.slice(0, -1);
});



const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "200");
svg.setAttribute("height", "200");

const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("x", "50");
rect.setAttribute("y", "50");
rect.setAttribute("width", "100");
rect.setAttribute("height", "100");
rect.setAttribute("stroke", "black");
rect.setAttribute("stroke-width", "2");
rect.setAttribute("fill", "yellow");

svg.appendChild(rect);
document.body.appendChild(svg);



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


