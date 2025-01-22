function scrollToSocial() {
  document.getElementById('socialD').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('socialM').scrollIntoView({ behavior: 'smooth' });
}

function openNav() {
  navBar = document.getElementById('nav')

  navBar.style.display = 'block';
}

function closeNav() {
  navBar = document.getElementById('nav')

  navBar.style.display = 'none';
}