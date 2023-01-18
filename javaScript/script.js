'use strict';
//man hinh to
const active = function () {
  document.querySelector('.content-kn').classList.add('display1');
  document.querySelector('.edu-hv').classList.add('display3');
  document.querySelector('.active-hd').classList.add('display1');
  document.querySelector('.hobby-sth').classList.add('display4');
  document.querySelector('.content-lang').classList.add('display3');
  document.querySelector('.content-skills').classList.add('display1');
};
//man hinh mobile
const active1 = function () {
  document.querySelector('.content-kn').classList.add('display1');
  document.querySelector('.edu-hv').classList.add('display4');
  document.querySelector('.active-hd').classList.add('display3', 'text-dark');
  document.querySelector('.hobby-sth').classList.add('display4');
  document.querySelector('.content-lang').classList.add('display2');
  document.querySelector('.content-skills').classList.add('display1');
  document.querySelector('.active-hd').classList.remove('bg-primary');
};
//lay kick thuoc trinh duyet wed
const getWidth = () => {
  return Math.max(
    document.querySelector('body').scrollWidth,
    document.querySelector('body').offsetWidth
  );
};

if (getWidth() > 576) {
  active();
} else {
  active1();
}
