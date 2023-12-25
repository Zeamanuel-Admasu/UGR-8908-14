document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');
  
    navbarToggle.addEventListener('click', function() {
      navbarNav.classList.toggle('show');
    });
  
    
    document.addEventListener('click', function(event) {
      const target = event.target;
      if (!target.matches('.navbar-toggler') && !target.closest('.navbar-collapse')) {
        navbarNav.classList.remove('show');
      }
    });
  });
  