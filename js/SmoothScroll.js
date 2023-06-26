document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar');

    const toggleNav = () => {
      navMenu.classList.toggle('mostrar');
    };
    navTrigger.addEventListener('click', toggleNav);
  });
  