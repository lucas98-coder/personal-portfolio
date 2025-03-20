const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

// burger.addEventListener('click', () => {
//   navList.classList.toggle('v-class-resp');
//   navbar.classList.toggle('h-nav-resp');
// });

function toggleNav() {
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
}
burger.addEventListener('click', toggleNav);


document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger')) {
    toggleNav();
  }
});