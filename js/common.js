//공통적으로 사용될 내용들을 이안에!!


//헤드 내용
const searchEl =document.querySelector('.search');
const searchInputEl =searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});


searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


// footer
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021