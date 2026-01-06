document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cookieOverlay");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");
  overlay.style.display = "flex";

  acceptBtn.addEventListener("click", () => {
    playClickSound();
    overlay.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    playClickSound();
    alert("Böse!")
    overlay.style.display = "none";
  });
});

function playClickSound(){
  const clickSound = new Audio("../Sounds/clickSound.wav")
  clickSound.play();
}