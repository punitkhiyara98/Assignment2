const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

for (let p = 1; p <= 5; p++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic" + p + ".jpg");
  thumbBar.appendChild(newImage);
  newImage.onclick = function(c) {
    displayedImage.src = c.target.src;
  };
}
/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
};
