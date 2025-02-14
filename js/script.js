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

function showHeader() {
  const header = document.getElementById('content');
  header.classList.add('active');
}

window.onload = () => {
  setTimeout(showHeader, 5700);
};

// Header Animation

document.addEventListener('DOMContentLoaded', function () {
  const headerLis = document.querySelectorAll('header ul li');
  const defaultActiveLi = document.querySelector('header ul li:nth-child(4)');
  const header = document.querySelector('header');

  let activeLi = defaultActiveLi;
  activeLi.classList.add('active-item');

  headerLis.forEach(li => {
    li.addEventListener('mouseover', function () {
      if (activeLi !== li) {
        activeLi.classList.remove('active-item');
      }
      activeLi = li;
      li.classList.add('active-item');
    });

    li.addEventListener('mouseout', function () {
      activeLi.classList.remove('active-item');
      defaultActiveLi.classList.add('active-item');
      activeLi = defaultActiveLi;
    });
  });
});
