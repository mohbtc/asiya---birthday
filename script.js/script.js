const surpriseButton = document.getElementById("surpriseButton");
const surpriseSection = document.getElementById("surprise");
const birthdayVideo = document.getElementById("birthdayVideo");
const videoOverlay = document.getElementById("videoOverlay");
const playVideo = document.getElementById("playVideo");


// ================================
// OPEN THE SURPRISE
// ================================

surpriseButton.addEventListener("click", () => {

  surpriseSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  createHearts();

});


// ================================
// VIDEO PLAY BUTTON
// ================================

playVideo.addEventListener("click", async () => {

  try {

    await birthdayVideo.play();

    videoOverlay.classList.add("hidden");

  } catch (error) {

    console.log("Video playback requires user interaction.");

  }

});


// ================================
// HIDE OVERLAY WHEN VIDEO PLAYS
// ================================

birthdayVideo.addEventListener("play", () => {

  videoOverlay.classList.add("hidden");

});


// ================================
// SHOW OVERLAY WHEN VIDEO STOPS
// ================================

birthdayVideo.addEventListener("pause", () => {

  if (!birthdayVideo.ended) {
    videoOverlay.classList.remove("hidden");
  }

});


// ================================
// FLOATING HEARTS
// ================================

function createHearts() {

  for (let i = 0; i < 22; i++) {

    const heart = document.createElement("div");

    heart.textContent = "💜";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";

    heart.style.fontSize =
      Math.random() * 14 + 14 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);


    const duration =
      Math.random() * 2500 + 3000;


    const rotation =
      Math.random() * 360 - 180;


    heart.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 0
        },

        {
          transform:
            `translateY(-${window.innerHeight + 100}px) rotate(${rotation}deg)`,

          opacity: 1
        },

        {
          transform:
            `translateY(-${window.innerHeight + 180}px) rotate(${rotation * 1.5}deg)`,

          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "ease-out"
      }
    );


    setTimeout(() => {

      heart.remove();

    }, duration);

  }

}
