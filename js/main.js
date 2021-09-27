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

const badgeEl = document.querySelector('header .badges');


window.addEventListener('scroll', _.throttle(function(){
 console.log(window.scrollY);
 if(window.scrollY > 500){
  //배지숨기기 gsap.to(요소, 지속시간, 옵션);   badgeEl.style.display='none';
  gsap.to(badgeEl, .6, {
    opacity : 0,
    display : 'none'
  } );
  } else{
    //배지보이기  badgeEl.style.display='block';
   gsap.to(badgeEl, .6, {
     opacity: 1,
     display : 'block'
   });
  }
  }, 300) );
//   _.throttle(함수,시간 ms);

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl,1,{
   delay: (index+1)* .7,  //0.7 1.4 2.1 2.8
  opacity:1
  });
});

// new키워드를 사용하는 것은 생성자(js내클래스)
// new Swiper(선택자,옵션);
new Swiper ('.notice-line .swiper-container',{
  direction:'vertical',
  autoplay: true,
  loop:true //반복재생하는 함수 다끝나면 다시처음으로돌아가서 반복재생
});
new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //10px로 슬라이드 사이의 여백을주다
  centeredSlides: true, //1번슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
     delay: 2000 //500은 0.5초를 나타내고 슬라이드가 움직이게된다.기본값은 3000으로 3초를 나타낸다
   },        // {}객체데이터로 할당하면 더추가적인 옵션을 부여할수있다.
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소를 시각적으로 보는것 뿐아니라 사용자가 직접 제어가 가능한지 확인해주는 옵션
  },
  navigation : {
    prevEl : '.promotion .swiper-prev', //이전버튼
    nextEl : '.promotion .swiper-next', //다음버튼
    }
});
//토글 프로모션에 관련되 자바스크립트작성 보이고 안보이는것을 제어하는부분이다! 
const promotionEl = docunemt.querySelector('.promotion');
const promotionToggleBtn = docunemt.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion 
  /*느낌표뒤에 붙어있는 값이 반대가되게 만들어주세요!라는뜻*/  
  if(isHidePromotion){
    //true = 숨김처리
    promotionEl.classList.add('hide');
  } else{
    //false면 보임처리
    promotionEl.classList.remove('hide');
  }
});



