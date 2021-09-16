const changeCommandPhoto = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');
  for (let i = 0; i < commandPhoto.length; i++) {
    const prevImg = commandPhoto[i].src;
    commandPhoto[i].addEventListener('mouseover', event => {
      event.target.src = event.target.dataset.img;
    });
    commandPhoto[i].addEventListener('mouseout', event => {
      event.target.src = prevImg;
    });
  }
};

export default changeCommandPhoto;
