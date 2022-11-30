// ##Catch Needed Elements
// Elements From Rate State Box
const rateStateBox = document.querySelector(".rate-state");
const bulletsBox = document.querySelector(".rate-bullets");
const submitBtn = document.querySelector(".rate-state button");
const popUp = document.querySelector(".rate-state .popUp");
// Elements From Thank State Box
const thankStateBox = document.querySelector(".thank-state");
const yourRate = document.querySelector(".thank-state .your-rate");

// ##Variables
let arrayOfBullets = Array.from(bulletsBox.children);
let selectedRate = 0;

// ##Events
// Handling Hover Property of Rate Bullets In Different Devices
bulletsBox.addEventListener("mouseover", function () {
  if (window.navigator.maxTouchPoints > 0) {
    // Disable Hover On Touch Devices
    arrayOfBullets.forEach((bullet) => {
      bullet.classList.add("no-hover");
    });
  } else {
    // Enable Hover On Traditional Devices
    arrayOfBullets.forEach((bullet) => {
      bullet.classList.remove("no-hover");
    });
  }
});

// Selected Rate
arrayOfBullets.forEach((bullet) => {
  bullet.onclick = function () {
    if (bullet.classList.contains("clicked")) {
      bullet.classList.remove("clicked");
      selectedRate = 0;
    } else {
      selectRate(bullet);
      // Hide popup
      popUp.style.display = "none";
    }
  };
});

// Sumit Your Rate
submitBtn.onclick = function () {
  showThankState();
};

// ##Functions
// Select Rate Function
function selectRate(selected) {
  arrayOfBullets.forEach((bullet) => {
    bullet.classList.remove("clicked");
  });
  selected.classList.add("clicked");
  // Get the selected rate
  selectedRate = selected.innerHTML;
}
// Show Thank State Function
function showThankState() {
  if (selectedRate > 0) {
    // Switch the boxs
    rateStateBox.classList.add("hide");
    thankStateBox.classList.add("show");
    // Show the selected rate
    yourRate.innerHTML = selectedRate;
  } else {
    // Show popup
    popUp.style.display = "block";
    // Shake the popup
    popUp.classList.add("shake");
    setTimeout(function () {
      popUp.classList.remove("shake");
    }, 400);
  }
}
