document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.header');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('header-dark');
    else
      navbar.classList.remove('header-dark');
  });
}
