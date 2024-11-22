document.addEventListener("DOMContentLoaded", () => {
  const btnClickMe = document.getElementById("btn-click-me");
  const messageImage = document.getElementById("messageImage");
  const btnKnowMore = document.getElementById("btn-know-more");
  const bulletPointsSection = document.getElementById("bulletPointsSection");
  const brightenText = document.getElementById("brightenText");

  // Background images for the surprise
  const images = [
    "Nigga1.jpg",
    "Nigga2.jpg",
    "Nigga3.jpg",
    "Nigga4.jpg",
    "Nigga5.jpg",
    "nigga.jpg"
  ];

  let clickCount = 0;

  // Pride flags falling effect
  const createFallingFlags = () => {
    const body = document.body;
    const flagCount = 50;
    const flagIcons = ["🏳️‍🌈", "🏳️‍⚧️", "🌈", "❤️"];
    for (let i = 0; i < flagCount; i++) {
      const flag = document.createElement("span");
      flag.textContent = flagIcons[Math.floor(Math.random() * flagIcons.length)];
      flag.classList.add("falling-flag");
      flag.style.left = `${Math.random() * 100}vw`;
      flag.style.animationDelay = `${Math.random() * 2}s`;
      flag.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
      body.appendChild(flag);

      flag.addEventListener("animationend", () => {
        flag.remove();
      });
    }
  };
  createFallingFlags();
  setInterval(createFallingFlags, 4000);

  // "Click Me" button functionality
  btnClickMe.addEventListener("click", () => {
    if (clickCount === 0) {
      brightenText.classList.add("hidden");
      messageImage.src = images[0];
      messageImage.classList.remove("hidden");
      setTimeout(() => (messageImage.style.opacity = 1), 100);
      btnKnowMore.classList.remove("hidden");
      btnClickMe.textContent = "Click Me Again to See a Surprise";
    } else {
      const randomIndex = clickCount % images.length;
      messageImage.src = images[randomIndex];
    }
    clickCount++;
  });

  // "Click to Know More" button functionality
  btnKnowMore.addEventListener("click", () => {
    bulletPointsSection.innerHTML = `
      <ul>
        <li>🌟 It reminds us of that she is beautiful yet autistic!</li>
        <li>🌈  symbolizes she is gayest member of the gay maker club!</li>
        <li>✨ The little moments of her shortness can lead to anger issues!</li>
      </ul>`;
    bulletPointsSection.style.display = "block";
    setTimeout(() => {
      bulletPointsSection.style.opacity = 1;
    }, 100);
  });
});
