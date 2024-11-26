document.addEventListener("DOMContentLoaded", () => {
  const btnClickMe = document.getElementById("btn-click-me");
  const messageImage = document.getElementById("messageImage");
  const btnKnowMore = document.getElementById("btn-know-more");
  const bulletPointsSection = document.getElementById("bulletPointsSection");
  const brightenText = document.getElementById("brightenText");
  const body = document.body;

  // Add stethoscopes falling like snow
  function createStethoscope() {
    const stethoscope = document.createElement("div");
    stethoscope.classList.add("stethoscope");
    stethoscope.textContent = "🩺"; // Stethoscope emoji

    // Randomize the starting position horizontally and animation speed
    stethoscope.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    stethoscope.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random animation speed

    body.appendChild(stethoscope);

    // Remove stethoscope after animation ends
    setTimeout(() => {
      stethoscope.remove();
    }, 5000); // Duration matches the animation time
  }

  // Create stethoscopes every 150ms
  setInterval(createStethoscope, 150);

  // Background images for the surprise
  const images = [
    "pic1.jpg",  // Replace with actual image paths
    "pic2.jpg", 
    "pic3.jpg",
  ];

  let clickCount = 0;

  // "Click Me" button functionality
  btnClickMe.addEventListener("click", () => {
    if (clickCount === 0) {
      brightenText.classList.add("hidden");
      setTimeout(() => {
        messageImage.classList.remove("hidden");
        messageImage.style.opacity = 1;
      }, 200);
      btnKnowMore.classList.remove("hidden");
      btnClickMe.textContent = "Click Me Again to See a Surprise";
    } else {
      // Switch images in a circular manner
      const randomIndex = clickCount % images.length;
      messageImage.src = images[randomIndex];
    }
    clickCount++;
  });

  // "Click to Know More" button functionality
  btnKnowMore.addEventListener("click", () => {
    bulletPointsSection.innerHTML = `
      <ul>
        <li>☕ You and me when!</li>
        <li>🍿🎥✮⋆ you and me when!</li>
        <li>🏝️🍹⛱️🌞 🌊 you and me when!</li>
        <li>Please dm your option via insta</li>
      </ul>`;
    bulletPointsSection.style.display = "block";
    setTimeout(() => {
      bulletPointsSection.style.opacity = 1;
    }, 100);
  });
});
