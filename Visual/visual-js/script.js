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
  const triggerPoint = $('.feel').offset().top + $('.feel').outerHeight(); // 섹션1 아래 기준

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
      



$(function () {
  gsap.registerPlugin(ScrollTrigger);
    // 캠페인 비디오 커버 마스크 열림
    const bg = gsap.timeline({
      scrollTrigger: {
        trigger: '.campaign-video',
        start: 'top',
        end: '+=500',
        scrub: 2,
        pin: true
      }
    });
  
    bg.fromTo('.cover-top', { opacity: 1 }, {
      yPercent: '-100',
      ease: 'none',
      duration: 5
    }, 0);
  
    bg.fromTo('.cover-bottom', { opacity: 1 }, {
      yPercent: '100',
      ease: 'none',
      duration: 5
    }, 0);
  // 마스크 이미지 커짐 애니메이션
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".feel",
      start: "top top",
      end: "+=500",
      scrub: true,
      // markers: true,
      pin: true
    }
  });

  tl.to(".feel .pathimg img", {
    width: "100%",
    height: "100vh",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    filter: "brightness(50%)"
  }, 0)
  .fromTo('.feel .slideText .left', { opacity: 1 }, {
    opacity: 0, xPercent: -80, ease: "none", duration: 10
  }, "+=0.5")
  .fromTo('.feel .slideText .right', { opacity: 1 }, {
    opacity: 0, xPercent: 80, ease: "none", duration: 10
  }, "<")
  .fromTo('.feel .infoText', { opacity: 0 }, {
    opacity: 1, ease: "none", duration: 10
  }, "+=3");



  // Opera 이미지 겹치는 효과
  gsap.timeline({
    scrollTrigger: {
      trigger: '.Opera',
      start: 'top top',
      end: '+=1000',
      scrub: 2,
      // markers: true,
      pin:true
    }
  })
  .fromTo('.Opera .Opera-inner span.a', { y: '400%' }, { y: '0', duration: 3, ease: "power2.out"}, 0)
  .fromTo('.Opera .Opera-inner span.b', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 0.6)
  .fromTo('.Opera .Opera-inner span.c', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 1.2)
  .fromTo('.Opera .Opera-inner span.d', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 1.8)
  .fromTo('.Opera .Opera-inner span.e', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 2.4)
  .fromTo('.Opera .Opera-inner span.f', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 3.0)
  .fromTo('.Opera .Opera-inner span.g', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 3.6)
  .fromTo('.Opera .Opera-inner span.h', { y: '400%' }, { y: '0', duration: 3,ease: "power2.out" }, 4.2);
  // Opera 텍스트 퍼짐 효과
  gsap.to(".text-left", {
    xPercent: -70,
    opacity: 0.4,
    scrollTrigger: {
      trigger: ".Opera",
      start: "top top",
      end: "center center",
      scrub: true
    }
  });

  gsap.to(".text-right", {
    xPercent: 70,
    opacity: 0.4,
    scrollTrigger: {
      trigger: ".Opera",
      start: "top top",
      end: "center center",
      scrub: true
    }
  });



})


$(document).ready(function() {
  let lastDrop = 0;

  $(".campaign .inner .campaignVisual").ripples({
    resolution: 256,
    perturbance: 0.03,
    dropRadius: 50
  });
  $(".reserved").ripples({
    resolution: 256,
    perturbance: 0.03,
    dropRadius: 50
  });

});

