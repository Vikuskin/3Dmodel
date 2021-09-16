const validator = () => {
  class Validator {
    constructor({ selector, pattern = {}, method }) {
      this.form = document.querySelector(selector);
      this.pattern = pattern;
      this.method = method;
      this.elementsForm = [...this.form.elements].filter(item => {
        return item.tagName.toLowerCase() !== 'button' &&
          item.type !== 'button';
      });
      this.error = new Set();
    }

    init() {
      this.applyStyle();
      this.setPattern();
      this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
      this.form.addEventListener('submit', event => {
        this.elementsForm.forEach(elem => this.checkIt({ target: elem }));
        if (this.error.size) {
          event.preventDefault();
        }
      });
    }

    isValid(elem) {
      const validatorMethod = {
        notEmpty(elem) {
          if (elem.value.trim() === '') {
            return false;
          }
          return true;
        },
        pattern(elem, pattern) {
          return pattern.test(elem.value);
        }
      };
      if (this.method) {
        const method = this.method[elem.id];
        if (method) {
          return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
        }
      }

      return true;
    }

    checkIt(event) {
      const target = event.target;

      if (this.isValid(target)) {
        this.showSuccess(target);
        this.error.delete(target);
      } else {
        this.showError(target);
        this.error.add(target);
      }
    }

    showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
      if (!elem.nextElementSibling) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
      } else {
        return;
      }
    }

    showSuccess(elem) {
      elem.classList.remove('error');
      elem.classList.add('success');
      if (!elem.nextElementSibling) {
        return;
      } else {
        elem.nextElementSibling.remove();
      }
    }

    applyStyle() {
      const style = document.createElement('style');
      style.textContent = `
    input.success {
      border: 4px solid green !important
    }
    input.error {
      border: 4px solid red !important
    }
    .validator-error {
      font-size: 14px;
      color: red;
    }
    `;
      document.head.appendChild(style);
    }

    setPattern() {
      if (!this.pattern.name) {
        this.pattern.name = /^[а-яА-ЯёЁ\-' ']{2,}/;
      }

      if (!this.pattern.phone) {
        this.pattern.phone = /^\+?[78]([-()]*\d){7,12}$/;
      }

      if (!this.pattern.email) {
        this.pattern.email = /^\w+@\w+\.\w{2,}$/;
      }
    }
  }

  class Validator2 extends Validator {
    constructor(selector, pattern = {}, method, form, elementsForm, error) {
      super(selector, pattern, method, form, elementsForm, error);
    }
    showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
      if (!elem.nextElementSibling) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error2');
        elem.insertAdjacentElement('afterend', errorDiv);
      } else {
        return;
      }
    }
    applyStyle() {
      const style = document.createElement('style');
      style.textContent = `
    input.success {
      border: 4px solid green !important
    }
    input.error {
      border: 4px solid red !important
    }
    .validator-error2 {
      font-size: 14px;
      color: red;
      margin-top: -20px;
    }
    @media (max-width: 991px) {
      .validator-error2 {
        margin-top: 0;
      }
    }
    `;
      document.head.appendChild(style);
    }
  };

  const valid = new Validator2({
    selector: '#form1',
    pattern: {},
    method: {
      'form1-name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'form1-phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'form1-email': [
        ['notEmpty'],
        ['pattern', 'email']
      ]
    },
  });
  valid.init();
  const valid3 = new Validator({
    selector: '#form3',
    pattern: {},
    method: {
      'form3-name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'form3-phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'form3-email': [
        ['notEmpty'],
        ['pattern', 'email']
      ]
    },
  });
  valid3.init();
  const valid2 = new Validator({
    selector: '#form2',
    pattern: {
      message: /^[а-яА-ЯёЁ\-' ']/,
    },
    method: {
      'form2-name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'form2-phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'form2-email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'form2-message': [
        ['notEmpty'],
        ['pattern', 'message']
      ]
    },
  });
  valid2.init();
};

export default validator;
