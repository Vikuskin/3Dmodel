const scrollBtn = () => {
  const secondSection = document.querySelector('#service-block');
  const btnScroll = document.getElementsByTagName('a')[0];

  btnScroll.addEventListener('click', e => {
    e.preventDefault();
    secondSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
};

export default scrollBtn;
