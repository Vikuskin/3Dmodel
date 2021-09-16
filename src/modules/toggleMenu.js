const toggleMenu = () => {

  const menu = document.querySelector('menu'),
    link = menu.querySelectorAll('ul>li>a');

  document.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('menu') || target.attributes[0].value === 'images/menu.svg' || target.classList.contains('active-menu')) {
      menu.classList.add('active-menu');
    } else if (target.classList.contains('close-btn')) {
      menu.classList.remove('active-menu');
    } else {
      menu.classList.remove('active-menu');
    }
  });

  //menu scroll
  link.forEach(item => item.addEventListener('click',
    e => {
      e.preventDefault();
      menu.classList.toggle('active-menu');
      const id = item.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });

    }));
};

export default toggleMenu;
