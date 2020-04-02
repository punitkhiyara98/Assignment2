const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let p = 1; p < 6; p++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic"+p+".jpg");
    thumbBar.appendChild(newImage);
    newImage.onClick = function(n) {
        displayedImage.src = n.target.src;
    }
}


/* Wiring up the Darken/Lighten button */
