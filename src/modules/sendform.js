const sendForm = () => {
  const loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро свяжемся с вами',
    statusMessage = document.createElement('div'),
    errorMessage = 'Что-то пошло не так',
    nameError = 'Введите не менее 2 символов в поле имя',
    emailError = 'Введите email',
    phoneError = 'Введите не менее 7 и не больше 12 символов в поле номер телефона',
    form = document.getElementsByTagName('form');

  statusMessage.style.cssText = 'font-size: 2rem;';
  const input = document.getElementsByTagName('input');

  for (let i = 0; i < form.length; i++) {

    form[i].addEventListener('submit', event => {
      event.preventDefault();
      form[0].appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form[i]);
      const data = {};
      for (const val of formData.entries()) {
        data[val[0]] = val[1];
      }

      const topForm = document.querySelector('.top-form'),
        formName = document.querySelectorAll('.form-name'),
        formEmail = document.querySelectorAll('.form-email'),
        formPhone = document.querySelectorAll('.form-phone'),
        formMess = document.getElementById('form2-message');

      if (formName[0].value.length < 2 && formName[1].value.length < 2 && topForm.value.length < 2) {
        statusMessage.textContent = nameError;
        return;
      }
      if (!formEmail[i].value) {
        statusMessage.textContent = emailError;
        return;
      }
      if (formPhone[i].value.length < 7 || formPhone[i].value.length > 12) {
        statusMessage.textContent = phoneError;
        return;
      }

      if (form[i].classList.contains('footer-form')) {
        if (!formMess.value) {
          return;
        }
      }

      postData(data)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        });


      for (let j = 0; j < input.length; j++) {
        input[j].value = '';
      }
    });
  }
};
const postData = (data) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

export default sendForm;
