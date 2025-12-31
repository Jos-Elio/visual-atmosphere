// Load HTML partials
async function loadPartial(selector, url) {
    const container = document.querySelector(selector);
    if (!container) return;

    const response = await fetch(url);
    const html = await response.text();
    container.innerHTML = html;
}

// Mobile Navigation Toggle
function initMobileNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    if (!navToggle || !navList) {
        console.warn("Navbar elements not found");
        return;
    }

    navToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadPartial("#header", "./partials/header.html");

    initMobileNav();
    await loadPartial("#footer", "./partials/footer.html");

});

// Mute / Unmute Intro Video on Index.html
const indexVideo = document.getElementById("index-video");
const unmuteBtn = document.getElementById("BtnUnmuteIndex");

if (indexVideo && unmuteBtn) {
    unmuteBtn.addEventListener("click", () => {
        indexVideo.muted = !indexVideo.muted;
        unmuteBtn.innerHTML = indexVideo.muted ? "unmute" : "mute";
    });
};

// Pop-Up Info Box for Atmosphere.html
const modal = document.getElementById("info-modal");
const closeBtn = document.getElementById("close-modal");

if (modal && closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Visual Effect Selectors and Sliders
const hueSlider = document.getElementById("hue");
const visual = document.getElementById("visual-container");
const contrastSlider = document.getElementById("contrast");
const speedSlider = document.getElementById("speed");
const visualVideo = document.getElementById("visual");

// Update visual effects based on sliders
function updateVisualEffects() {
    const hue = hueSlider.value;
    const contrast = contrastSlider.value;
    const speed = speedSlider.value;

    visualVideo.style.filter = `hue-rotate(${hue}deg) contrast(${contrast}%)`;
    visualVideo.playbackRate = speed;
}

// check if video is loaded and playing
if (visualVideo) {
visualVideo.addEventListener("loadeddata", () => {
    updateVisualEffects();
});
}

// Update effects on slider input
if (hueSlider && contrastSlider && speedSlider && visual) {
    hueSlider.addEventListener("input", updateVisualEffects);
    contrastSlider.addEventListener("input", updateVisualEffects);
    speedSlider.addEventListener("input", updateVisualEffects);
}

// Fullscreen Button
const fullscreenBtn = document.getElementById("fullscreen-btn");
const exitBtn = document.getElementById("fullscreen-exit-btn");
if (fullscreenBtn && visual) {
    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            visual.requestFullscreen();
            fullscreenBtn.textContent = "Exit Fullscreen";
            exitBtn.style.display = "block";
        } else {
            document.exitFullscreen();
            fullscreenBtn.textContent = "Fullscreen";
        }   
    });
}

if (visualVideo) {
    exitBtn.addEventListener("click", () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    });
}

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.textContent = "Fullscreen";
        exitBtn.style.display = "none";
    }
});

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.textContent = "Fullscreen";
    }
});

// Audio Play Pause Button
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const volumeSlider = document.getElementById("volume");

if (playBtn && audio) {
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "Pause";
        } else {
            audio.pause();
            playBtn.textContent = "Play";
        }
    });
}

// Volume Control
if (volumeSlider && audio) {
    volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });
}

// Video Loop Switcher
const loopButtons = document.querySelectorAll(".video-switch button");

loopButtons.forEach(button => {
    button.addEventListener("click", () => {
        visualVideo.src = `assets/visuals/${button.dataset.video}`;
        visualVideo.play();
        updateVisualEffects(); // apply Filter/Speed 
    });
});

// Preset Buttons
const presets = {
    calm: { hue: 40, contrast: 100, speed: 0.9, loop: "2.mp4" },
    cozy: { hue: 80, contrast: 120, speed: 1, loop: "3.mp4" },
    frenzy: { hue: 360, contrast: 150, speed: 2.0, loop: "1.mp4" }
}

const presetButtons = document.querySelectorAll(".presets button");

presetButtons.forEach(button => {
    button.addEventListener("click", () => {
        const preset = presets[button.dataset.preset];

        hueSlider.value = preset.hue;
        contrastSlider.value = preset.contrast;
        speedSlider.value = preset.speed;

        visualVideo.src = `assets/visuals/${preset.loop}`;
        visualVideo.play();

        updateVisualEffects();
    });
});