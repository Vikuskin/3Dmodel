const validation = () => {
  const calcItem = document.querySelectorAll('.calc-item');
  for (let i = 1; i < calcItem.length; i++) {
    calcItem[i].addEventListener('input', () => {
      calcItem[i].value = calcItem[i].value.replace(/\D/g, '');
    });
  }
  const getUpperChar = val => {
    val = val.toLowerCase();
    const str = val.split(' ');
    let newStr = '';
    str.forEach(item => {
      item = item[0].toUpperCase() + item.substring(1, item.length) + ' ';
      newStr += item;
    });
    const newStr2 = newStr.trim();
    return newStr2;
  };

  const formName = document.querySelectorAll('.form-name');
  formName.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^а-яА-ЯёЁ' ']/g, '');
    });
  });
  for (let i = 0; i < formName.length; i++) {
    formName[i].onblur = () => {
      formName[i].value = formName[i].value.replace(/[^а-яА-ЯёЁ' ']/g, '');
      formName[i].value = formName[i].value.replace(/\s+/g, ' ');
      formName[i].value = formName[i].value.replace(/-+/g, '-');
      formName[i].value = formName[i].value.replace(/^[\s+\-+]+|[\s+\-+]+$/g, '');
      formName[i].value = formName[i].value.replace(formName[i].value, getUpperChar(formName[i].value));
    };
  }

  const topForm = document.querySelector('.top-form');
  topForm.addEventListener('input', () => {
    topForm.value = topForm.value.replace(/[^а-яА-ЯёЁ' ']/g, '');
  });
  topForm.onblur = () => {
    topForm.value = topForm.value.replace(/[^а-яА-ЯёЁ' ']/g, '');
    topForm.value = topForm.value.replace(/\s+/g, ' ');
    topForm.value = topForm.value.replace(/-+/g, '-');
    topForm.value = topForm.value.replace(/^[\s+\-+]+|[\s+\-+]+$/g, '');
    topForm.value = topForm.value.replace(topForm.value, getUpperChar(topForm.value));
  };

  const formEmail = document.querySelectorAll('.form-email');
  formEmail.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^A-Za-z\-@_.!`*']/g, '');
    });
  });
  for (let i = 0; i < formEmail.length; i++) {
    formEmail[i].onblur = () => {
      formEmail[i].value = formEmail[i].value.replace(/[^A-Za-z\-@_.!`*']/g, '');
      formEmail[i].value = formEmail[i].value.replace(/\s+/g, ' ');
      formEmail[i].value = formEmail[i].value.replace(/-+/g, '-');
      formEmail[i].value = formEmail[i].value.replace(/^[\s+\-+]+|[\s+\-+]+$/g, '');
    };
  }

  const formPhone = document.querySelectorAll('.form-phone');
  formPhone.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^0-9+]/, '');
    });
  });
  for (let i = 0; i < formPhone.length; i++) {
    formPhone[i].onblur = () => {
      formPhone[i].value = formPhone[i].value.replace(/[^0-9+]/, '');
      formPhone[i].value = formPhone[i].value.replace(/\s+/g, ' ');
      formPhone[i].value = formPhone[i].value.replace(/-+/g, '-');
      formPhone[i].value = formPhone[i].value.replace(/^[\s+\-+]+|[\s+\-+]+$/g, '');
    };
  }

  const formMess = document.getElementById('form2-message');
  formMess.addEventListener('input', () => {
    formMess.value = formMess.value.replace(/[^а-яА-ЯёЁ0-9\-,.!?' ']/g, '');
  });
  formMess.onblur = () => {
    formMess.value = formMess.value.replace(/[^а-яА-ЯёЁ0-9\-,!.?' ']/g, '');
    formMess.value = formMess.value.replace(/\s+/g, ' ');
    formMess.value = formMess.value.replace(/-+/g, '-');
    formMess.value = formMess.value.replace(/^[\s+\-+]+|[\s+\-+]+$/g, '');
  };
};

export default validation;
