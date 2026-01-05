document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cookieOverlay");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  overlay.style.display = "flex";


  acceptBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    alert("Böse!")
    overlay.style.display = "none";
  });
});