const startButton = document.getElementById("startButton");
const lessonButton = document.getElementById("lessonButton");


// Start Learning button

if (startButton) {

    startButton.addEventListener("click", function () {

        window.location.href = "animals.html";

    });

}


// Animals lesson button

if (lessonButton) {

    lessonButton.addEventListener("click", function () {

        window.location.href = "animals.html";

    });

}


// Play Burmese MP3

function playAudio(file) {

    const audio = new Audio(file);

    audio.volume = 1;

    audio.play().catch(function (error) {

        console.error("Audio could not play:", error);

        alert("Could not play the audio. Please check the MP3 file.");

    });

}


// Coming soon

function comingSoon() {

    alert("This lesson is coming soon! 🚀");

}