'use strict';

const header=document.querySelector('.header');

window.addEventListener('scroll',(event)=>{
  // console.log(event.type, '<<')
  console.log(window.scrollY, '<<')
  // console.log(document.documentElement.scrollTop, '<<')




  const wScrollTop=window.scrollY;
  if(wScrollTop>60){
    header.classList.add('headerOn')
    // header.style.backgroundColor='#ffffff';
  }else{
    // header.style.backgroundColor='#ccc';
    header.classList.remove('headerOn')
  }
  

});


//이벤트 위임
const section=document.querySelectorAll('.section');
const scrollBtnUl=document.querySelector('.scroll-btn>ul');
const scrollBtnUlLi=document.querySelectorAll('.scroll-btn>ul>li');

scrollBtnUl.addEventListener('click',(e)=>{
  e.preventDefault();
  const eTarget=e.target;
  scrollBtnUlLi.forEach((el,idx)=>{
    if(el===eTarget){
      const sTop=section[idx].offsetTop;
      console.log(`sTop -> ${sTop}`);
      window.scroll({top: sTop, left: 0, behavior: 'smooth'});
      el.classList.add('on');
    }else{
      el.classList.remove('on');
    }
  });
});