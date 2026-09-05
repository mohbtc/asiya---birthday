function openSurprise() {
  const birthday = document.getElementById("birthday");

  birthday.classList.add("show");

  birthday.scrollIntoView({
    behavior: "smooth"
  });

  createHearts();
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    const duration = Math.random() * 3 + 3;

    heart.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform:
            `translateY(-${window.innerHeight + 150}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}
