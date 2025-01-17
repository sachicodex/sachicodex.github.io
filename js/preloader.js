window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const minLoadTime = 4000;
  const startTime = performance.now();
  const animatedElements = document.querySelectorAll('[data-aos]');

  animatedElements.forEach((el) => {
    el.style.transition = 'none';
    el.style.transform = 'translateY(200vh)';
  });

  setTimeout(() => {
    const elapsedTime = performance.now() - startTime;
    const delay = elapsedTime < minLoadTime ? minLoadTime - elapsedTime : 0;

    setTimeout(() => {
      loader.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
      loader.style.opacity = '0';
      loader.style.transform = 'scale(0)';

      setTimeout(() => {
        loader.style.display = 'none';

        animatedElements.forEach((el) => {
          el.style.transition = '';
          el.style.transform = '';
        });

        AOS.init();
      }, 500);
    }, delay);
  }, 0);
});
