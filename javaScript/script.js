'use strict';

// //lay kick thuoc trinh duyet wed
// const getWidth = () => {
//   return Math.max(
//     document.querySelector('body').scrollWidth,
//     document.querySelector('body').offsetWidth
//   );
// };

// if (getWidth() > 576) {
//   active();
// } else {
//   active1();
// }

// tao su kien cho button trong phan thong tin ca nhan
//tao ham hien thi khi nhap mail
const displayMessage = function (message) {
  document.querySelector('.form-text').textContent = message;
  document.getElementById('emailHelp').style.color = 'red';
};
let button = document.querySelector('.button');
let personal = document.querySelector('.personal-info');
let checkMail = document.querySelector('.check-email');
//su dung bieu thuc chinh qui regular expression kiem tra cac ki tu
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener('click', function () {
  let check = document.querySelector('.check-input').value;
  console.log(typeof check);
  console.log(check);
  console.log(regex.test(check));
  // kiem tra chuoi rong
  if (check === '') {
    displayMessage('Xin vui lòng nhập địa chỉ mail.');
  } else if (!regex.test(check)) {
    //kiem tra dia chi mail bang regex
    displayMessage('Địa chỉ mail không chính xác.');
  } else {
    //dia chi mail dung hien ra thong tin
    personal.classList.remove('d-none');
    checkMail.classList.add('d-none');
  }
});
//tao event phan thong tin chi tiet
let box1 = document.querySelector('.content-kn');
let box2 = document.querySelector('.edu-hv');
let box3 = document.querySelector('.active-hd');
let box4 = document.querySelector('.hobby-sth');
let box5 = document.querySelector('.content-lang');
let box6 = document.querySelector('.content-skills');

let viewMore1 = document.querySelector('.view-more1');
let viewMore2 = document.querySelector('.view-more2');
let viewMore3 = document.querySelector('.view-more3');
let viewMore4 = document.querySelector('.view-more4');
let viewMore5 = document.querySelector('.view-more5');
let viewMore6 = document.querySelector('.view-more6');

let myBtn1 = document.querySelector('.my-btn1');
let myBtn2 = document.querySelector('.my-btn2');
let myBtn3 = document.querySelector('.my-btn3');
let myBtn4 = document.querySelector('.my-btn4');
let myBtn5 = document.querySelector('.my-btn5');
let myBtn6 = document.querySelector('.my-btn6');

let changeView1 = document.querySelector('.view1');
let changeView2 = document.querySelector('.view2');
let changeView3 = document.querySelector('.view3');
let changeView4 = document.querySelector('.view4');
let changeView5 = document.querySelector('.view5');
let changeView6 = document.querySelector('.view6');

//tao su kien onmouseenter & onmouseleave

//su kien di chuot
const openBtn = (mybtn) => {
  mybtn.classList.remove('d-none');
};
const closeBtn = (mybtn) => {
  mybtn.classList.add('d-none');
};

//box1
box1.onmouseenter = function () {
  // myBtn1.classList.remove('d-none');
  openBtn(myBtn1);
};
box1.onmouseleave = function () {
  // myBtn1.classList.add('d-none');
  closeBtn(myBtn1);
};

//box2
box2.onmouseenter = function () {
  // myBtn2.classList.remove('d-none');
  openBtn(myBtn2);
};
box2.onmouseleave = function () {
  // myBtn2.classList.add('d-none');
  closeBtn(myBtn2);
};

//box3
box3.onmouseenter = function () {
  // myBtn3.classList.remove('d-none');
  openBtn(myBtn3);
};
box3.onmouseleave = function () {
  // myBtn3.classList.add('d-none');
  closeBtn(myBtn3);
};
//box4
box4.onmouseenter = function () {
  // myBtn4.classList.remove('d-none');
  openBtn(myBtn4);
};
box4.onmouseleave = function () {
  // myBtn4.classList.add('d-none');
  closeBtn(myBtn4);
};
//box5
box5.onmouseenter = function () {
  // myBtn5.classList.remove('d-none');
  openBtn(myBtn5);
};
box5.onmouseleave = function () {
  // myBtn5.classList.add('d-none');
  closeBtn(myBtn5);
};

//box6
box6.onmouseenter = function () {
  // myBtn6.classList.remove('d-none');
  openBtn(myBtn6);
};
box6.onmouseleave = function () {
  // myBtn6.classList.add('d-none');
  closeBtn(myBtn6);
};
//tao su kien click button hien view more view less
const openContent = (box, viewmore, changeview) => {
  box.classList.remove('my-height');
  viewmore.classList.remove('d-none');
  changeview.innerHTML = 'VIEW LESS';
};
const closeContent = (box, viewmore, changeview) => {
  box.classList.add('my-height');
  viewmore.classList.add('d-none');
  changeview.innerHTML = 'VIEW MORE';
};
//btn1
myBtn1.addEventListener('click', function () {
  if (viewMore1.classList.contains('d-none')) {
    openContent(box1, viewMore1, changeView1);
  } else {
    closeContent(box1, viewMore1, changeView1);
  }
});

//btn2
myBtn2.addEventListener('click', function () {
  if (viewMore2.classList.contains('d-none')) {
    openContent(box2, viewMore2, changeView2);
  } else {
    closeContent(box2, viewMore2, changeView2);
  }
});

//btn3
myBtn3.addEventListener('click', function () {
  if (viewMore3.classList.contains('d-none')) {
    openContent(box3, viewMore3, changeView3);
  } else {
    closeContent(box3, viewMore3, changeView3);
  }
});

//btn4
myBtn4.addEventListener('click', function () {
  if (viewMore4.classList.contains('d-none')) {
    openContent(box4, viewMore4, changeView4);
  } else {
    closeContent(box4, viewMore4, changeView4);
  }
});

// btn5
myBtn5.addEventListener('click', function () {
  if (viewMore5.classList.contains('d-none')) {
    openContent(box5, viewMore5, changeView5);
  } else {
    closeContent(box5, viewMore5, changeView5);
  }
});

// btn6
myBtn6.addEventListener('click', function () {
  if (viewMore6.classList.contains('d-none')) {
    openContent(box6, viewMore6, changeView6);
  } else {
    closeContent(box6, viewMore6, changeView6);
  }
});
