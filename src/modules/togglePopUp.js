const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');
  let animateInterval;

  popupBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      let count = -50,
        width = document.documentElement.clientWidth;

      const animate = function () {
        animateInterval = requestAnimationFrame(animate);
        popup.style.display = 'block';
        if (width < 768) {
          cancelAnimationFrame(animateInterval);
        } else {
          popupContent.style.top = count + '%';
          count++;
          if (count < 26) {
            popupContent.style.top = count + '%';
          } else {
            cancelAnimationFrame(animateInterval);
          }
        }
      };
      animateInterval = requestAnimationFrame(animate);
    });
  });

  popup.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });
};

export default togglePopUp;
