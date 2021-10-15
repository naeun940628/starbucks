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
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function(){
 console.log(window.scrollY);
 if(window.scrollY > 500){ //500px이 넘어가면!
  //배지숨기기 gsap.to(요소, 지속시간, 옵션);   badgeEl.style.display='none';
  gsap.to(badgeEl, .6, {
    opacity : 0,
    display : 'none'
  } );

  //to-top 버튼 보이기!!!
  gsap.to('#to-top',.2,{x:0});



  } else{
    //배지보이기  badgeEl.style.display='block';
   gsap.to(badgeEl, .6, {
     opacity: 1,
     display : 'block'
   });

   //to-top 버튼숨기기!!!
   gsap.to('#to-top',.2,{x:100});





  }
  }, 300) );
//   _.throttle(함수,시간 ms);


toTopEl.addEventListener('click',function(){
gsap.to(window,.7,{
  scrollTo:0
});
});







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
  loop: true //반복재생하는 함수 다끝나면 다시처음으로돌아가서 반복재생 / 반복재생의 여부를 묻는것이 loop이다
});
new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //10px로 슬라이드 사이의 여백을주다
  centeredSlides: true, //1번슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
     delay: 2000 //500은 0.5초를 나타내고 슬라이드가 움직이게된다.기본값은 3000으로 3초를 나타낸다
   },        // {}객체데이터로 할당하면 더추가적인 옵션을 부여할수있다.
   //여기부터 3슬라이드 페이지버튼 js
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소를 시각적으로 보는것 뿐아니라 사용자가 직접 제어가 가능한지 확인해주는 옵션
  },
  navigation : {
    prevEl : '.promotion .swiper-prev', //이전버튼
    nextEl : '.promotion .swiper-next', //다음버튼
    }
});


new Swiper('.awards .swiper-container',{
  autoplay:true, //자동재생
  loop:true, //반복재생
  spaceBetween:30, //사이의 여백을 30px로 지정
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});
//토글 프로모션에 관련되 자바스크립트작성 보이고 안보이는것을 제어하는부분이다! 
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion 
  /*느낌표뒤에 붙어있는 값이 반대가되게 만들어주세요!라는뜻 값이 true가 된다.*/  
  if(isHidePromotion){
    //true = 숨김처리
    promotionEl.classList.add('hide');
  } else{
    //false면 보임처리
    promotionEl.classList.remove('hide');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}



function floatingObject(selector,delay,size){
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5),  //애니메이션 동작 시간
    { //옵션
      y:size,  
      repeat:-1,//repeat는 반복을 결정해주는 옵션으로써 -1은 무한반복을 나타낸다. 이것은 js에서만 지원되는 효과이다.
      yoyo:true, //yoyo는 축의 값만큼 이동하는 효과가 끝난후 다시 그대로 원래자리에돌아도록하는 옵션이다
      ease: Power1.easeInOut,
      delay: random(0,delay)
    });
  
 
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls =document.querySelectorAll('section,scroll-spy');
// scroll-spy라는 클래스를 가진 섹션이있다면 spyEls라는 변수에 할당을하게된다.


spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook : .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021