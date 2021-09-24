'use strict';

import counterTimer from './modules/counterTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculate from './modules/calculate';
import sendForm from './modules/sendform';
import changeCommandPhoto from './modules/commandPhoto';
import scrollBtn from './modules/scrollBtn';
import validation from './modules/validation';
import validator from './modules/validator';

//Timer
counterTimer('16 October 2021');
//menu
toggleMenu();
//popup
togglePopUp();
//tabs
tabs();
//commandPhoto
changeCommandPhoto();
//scrollBtn
scrollBtn();
//slider
slider();
//calculate
calculate(100);
//validation
validation();
//validator
validator();
//send-ajax-form
sendForm();
