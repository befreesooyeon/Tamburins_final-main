$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(function(){
  Splitting();  //대문자로쓴다!!!
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});  
});
// gotop
$(function () {
  const triggerPoint = $('.about').offset().top + $('.about').outerHeight(); // 섹션1 아래 기준

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > triggerPoint) {
      $('.goTop').addClass('on');
    } else {
      $('.goTop').removeClass('on');
    }
  });

  // goTop 클릭 시 상단으로 스크롤
  $('.goTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
});

// fixheader
$(function(){
  var scrollTop = 0;
  // console.log(scrollTop)
  scrollTop = $(document).scrollTop();
  fixHeader();
})


$(window).on('scroll resize',function(){
  scrollTop = $(document).scrollTop();
  fixHeader();
})

function fixHeader() {
  if(scrollTop > 150){
      $('header').addClass('on');
  } else{
      $('header').removeClass('on');
  }}



// search page
$(function(){
    $('.search').on('click', function(){
      $('.searchPage').addClass('on');
      $('.wrap').addClass('on');
    });
    $('.searchPage').on('click', function(e){
        if ($(e.target).is('.searchPage, .close')) {
          $('.searchPage').removeClass('on');
          $('.wrap').removeClass('on');
        }
      });
  });

  $('.searchBtn').on('click', function(){
    const keyword = $('.searchInput').val();
    if (keyword.trim() === '') {
      alert('검색어를 입력해주세요.');
    } else {
      console.log('검색어:', keyword); // 나중에 여기서 검색 동작 넣으면 돼
    }
  });


	$(function(){
		$('.cart').on('click', function(){
		  $('.cartPage').addClass('on');
		  $('.dimmed').addClass('on');
		});
		$('.cartClose, .dimmed').on('click', function(){
			$('.cartPage').removeClass('on');
			$('.dimmed').removeClass('on');
		});
	  });

    $(function(){
      $('.language').on('click', function(e){
        e.stopPropagation(); // 이벤트 버블링 막음
        $('.lang').addClass('on');
      });
    
      // 바깥 클릭 시 닫기
      $(document).on('click', function(){
        $('.lang').removeClass('on');
      });
    
      // lang 내부 클릭해도 닫히지 않게 하기
      $('.lang').on('click', function(e){
        e.stopPropagation();
      });
    });




  
// scrolla
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

// swiper
$(function() {
    var swiper = new Swiper('.swiper', {
      // 설정
      initialSlide:3,
    centeredSlides:true,
    loop:true,
    speed:700,
    allowTouchMove:true,
    effect:"coverflow",
    coverflowEffect:{
        rotate:-10,
        stretch:-45,
        depth:100,
        modifier:1,
        slideShadows:false
    },
    slidesPerView:3,
    spaceBetween:0,
    mousewheel:{
        thresholdDelta: 50,
        sensitivity:1,
    },
    autoplay: {
        delay: 2000,         // 3초마다 슬라이드
        disableOnInteraction: false // 사용자 터치 후에도 autoplay 유지
      },
    pagination: false,
    breakpoints: {
        0: {
            slidesPerView:1,
            spaceBetween:20,
        },
        600: {
            slidesPerView:3,
        },
        1200: {
            slidesPerView:3,
        }
    }
    })
  });



     //   768px 이하 햄버거바
     $(function(){
      // 메뉴 열기
      $('.menubar').on('click', function(e){
        e.stopPropagation(); // 바깥 클릭과 충돌 방지
        $('.menuwrap').addClass('on');
      });
    
      // 메뉴 닫기 버튼 클릭
      $('.closebtn').on('click', function(){
        $('.menuwrap').removeClass('on');
      });
    
      // 메뉴 안쪽 클릭 시 닫히지 않게 막기
      $('.menuwrap').on('click', function(e){
        e.stopPropagation();
      });
    
      // 메뉴 바깥 클릭 시 메뉴 닫기
      $(document).on('click', function(){
        $('.menuwrap').removeClass('on');
      });
    });
    

  //768px 이하 서브메뉴 접기
  $(function() {
    $('.menuwrap .text .menuBusiness.shop').on('click', function() {
      $('.menuwrap .hideSubmenu.first').slideToggle(300); // 서브메뉴 슬라이드 토글
      $(this).find('span').toggleClass('up'); // 화살표 회전
    });
  
    $('.menuwrap .text .menuBusiness.customer').on('click', function() {
      $('.menuwrap .hideSubmenu.second').slideToggle(300); // 서브메뉴 슬라이드 토글
      $(this).find('span').toggleClass('up'); // 화살표 회전
    });
  });



// visual 애니메이션
$(window).on('load', function () {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({ delay: 0.2 });

  tl.to('.visual', {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: 'power3.out'
});

  tl.set('.visual-main', { visibility: 'visible' }, "-=1.0");

  tl.to('.visual-main', {
    duration: 1.8,
    opacity: 1,
    ease: 'power2.out',
    scale: 1
}, 0);


tl.to('.txt .title', { duration: 1, opacity: 1, y: 0, ease: 'power3.out' }, "-=1.0");

tl.to('.txt .title .word1', { opacity: 1, y: 0, ease: 'power3.out' ,duration: 1.2}, "-=1.0");
tl.to('.txt .title .word2', {opacity: 1, y: 0, ease: 'power3.out' ,duration: 1.4}, "-=0.1");


  tl.to('.sub', { duration: 1.0, opacity: 1, y: 0, ease: 'power3.out' }, "-=0.8");
  tl.to('.visbutton', { duration: 1.0, opacity: 1, y: 0, ease: 'power3.out' }, "-=0.8");




  // 배경 스케일 효과
  gsap.to('.visual-main', {
      scale: 1.4,
      ease: 'none',
      scrollTrigger: {
          trigger: '.visual',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          // markers:true
      }
  });

  // word1 - 왼쪽으로 이동하며 페이드아웃
  gsap.to('.word1', {
      left: -100,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
          trigger: '.visual',
          start: 'top bottom',
          end: 'center top',
          scrub: true,
          onLeaveBack: () => {
              gsap.to('.word1', { opacity: 0, duration: 0.5, ease: 'power2.out' });
          }
      }
  });

  // word2 - 오른쪽으로 이동하며 페이드아웃
  gsap.to('.word2', {
      left: 100,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
          trigger: '.visual',
          start: '10% bottom',
          end: 'bottom top',
          scrub: true
      }
  });

  // sub1 - 오른쪽으로 이동
  gsap.to('.sub1', {
      x: -100,
      ease: 'none',
      scrollTrigger: {
          trigger: '.visual',
          start: '10% bottom',
          end: 'center top',
          scrub: true
      }
  });

  // sub2 - 위로 이동
  gsap.to('.sub2', {
      top: "10%",
      ease: 'none',
      scrollTrigger: {
          trigger: '.visual',
          start: '10% bottom',
          end: 'center top',
          scrub: true
      }
  });

  // sub3 - 왼쪽으로 이동
  gsap.to('.sub3', {
      x: 100,
      ease: 'none',
      scrollTrigger: {
          trigger: '.visual',
          start: '10% bottom',
          end: 'center top',
          scrub: true
      }
  });

  
});

  // visual 애니메이션 추가
gsap.to('.visual .txt .des .line1', {
  duration: 10,
  stagger: 0.3,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.visual',
    start: '10% bottom',
    end: 'center top',
    scrub: true
  }
});


$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // 상단 텍스트 이동
  gsap.timeline({
    scrollTrigger: {
      trigger: '.visual',
      start: 'top top',
      end: '60% 60%',
      scrub: 1,
      // markers: true
    }
  })
  .to('.visual .txt .title .word1', { x: '-40%', ease: 'power2.out', opacity: 0.3, duration: 2 }, 0)
  .to('.visual .txt .title .word2', { x: '40%', ease: 'power2.out', opacity: 0.3, duration: 2 }, 0)
  .to('.visual .txt .sub .sub1', { y: '60px',  ease: 'power2.out', opacity: 0.3, duration: 2 }, 0)
  .to('.visual .txt .sub .sub2', { y: '-40px', ease: 'power2.out', opacity: 0.5, duration: 2 }, 0)
  .to('.visual .txt .sub .sub3', { y: '40px',  ease: 'power2.out', opacity: 0.3, duration: 2 }, 0);


  // 설명 텍스트 순차 등장
  gsap.timeline({
    scrollTrigger: {
      trigger: '.visual',
      start: 'center center',
      end:'80% center',
      scrub: true,
      // markers: true
    }
  })
  .fromTo('.visual .txt .des .line1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0)
  .fromTo('.visual .txt .des .line2', { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, '+=0.05')
  .fromTo('.visual .txt .des .line3', { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, '+=0.05');

  gsap.timeline({
    scrollTrigger: {
      trigger: '.bestProduct',
      start: 'top center',
      end:'40% top',
      scrub: true,
      // markers: true
    }
  })
  .to('.bestProduct .inner .contents ul li:nth-child(1)', { y: 0, opacity: 1, ease: 'none' }, 0)
  .to('.bestProduct .inner .contents ul li:nth-child(3)', { y: 0, opacity: 1, ease: 'none' }, '+=0.1')
  .to('.bestProduct .inner .contents ul li:nth-child(4)', { y: 0, opacity: 1, ease: 'none' }, '+=0.1')
  .to('.bestProduct .inner .contents ul li:nth-child(5)', { y: 0, opacity: 1, ease: 'none' }, '+=0.1')
  .to('.bestProduct .inner .contents ul li:nth-child(6)', { y: 0, opacity: 1, ease: 'none' }, '+=0.1')
  .to('.bestProduct .inner .contents ul li:nth-child(8)', {  opacity: 1, ease: 'none'},'+=0.1')

});

$(function () {
ScrollTrigger.matchMedia({
  "(min-width: 391px)": function () {

 // philosophy 애니메이션
  gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
          scrollTrigger:{
              trigger:'.stores',
              start:'top -100%',
              end:'bottom 0',
              scrub:1,
              markers:false,
          }
      })
      .to('.philosophy .egg1',{xPercent:'-100',ease:'none',duration:5,yPercent:'-120'},1)
      .to('.philosophy .egg2',{xPercent:'100',ease:'none',duration:5,yPercent:'50'},1)
      .fromTo('.philosophy .mainText',{opacity:0},{opacity:1,duration:5,ease:'none'},2)
    }})

})
