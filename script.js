const phrases = [
  "Laughs, Trips, and Midnight Talks 🌙",
  "From Holi Colors to Diwali Lights 🎇",
  "We are not just friends, we're family ❤️",
  "Captured Memories, Forever Moments 📸"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.getElementById('typing').innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      document.getElementById('typing').innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      document.getElementById('typing').innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}

loop();

// function enterSite() {
//   alert("Next page coming soon... Let's build it together!");
// }


function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}
function enterSite() {
  window.location.href = "gallery.html";
}
