$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(function() {
	$('.animate').scrolla({
		mobile: true, 
		once: false 
	});    
 }); 

// gotop
$(function () {
  const triggerPoint = $('.store').offset().top + $('.store').outerHeight(); // 섹션1 아래 기준

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
	Splitting();  
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
      $('.shop-detail .right .mainProduct .txtBox .btn .sendGift').on('click', function(){
        $('.gift').addClass('on');
        $('.dimmed').addClass('on');
      });
      $('.cartClose, .dimmed').on('click', function(){
        $('.gift').removeClass('on');
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
  
      $(function () {
        const params = new URLSearchParams(window.location.search);
        const store = params.get("store"); // 예: sinsa, hannam, dosan 등
        const storeList = ["hannam", "sungsu", "dosan", "samcheong", "sinsa"];
        const initialIndex = storeList.indexOf(store); // 해당 매장의 인덱스 찾기
      
        let storeSwiper = null;
      
        function initStoreSwiper() {
          const windowWidth = $(window).width();
      
          if (windowWidth > 1024) {
            if (!storeSwiper) {
              storeSwiper = new Swiper('.store-slider', {
                effect: 'fade',
                fadeEffect: {
                  crossFade: true,
                },
                navigation: {
                  nextEl: '.store-slider > .swiper-button-next',
                  prevEl: '.store-slider > .swiper-button-prev',
                },
                spaceBetween: 30,
                slidesPerView: 1,
                allowTouchMove: false,
                loop: true,
                initialSlide: initialIndex >= 0 ? initialIndex : 0 // ✅ 여기 반영!
              });
            }
          } else {
            if (storeSwiper) {
              storeSwiper.destroy(true, true);
              storeSwiper = null;
            }
          }
        }
      
        // 실행
        initStoreSwiper();
        $(window).on('resize', initStoreSwiper);
      
        // 내부 슬라이더 항상 실행
        document.querySelectorAll('.inner-slider').forEach((sliderEl) => {
          new Swiper(sliderEl, {
            pagination: {
              el: sliderEl.querySelector('.swiper-pagination'),
              type: 'bullets',
              clickable: true,
            },
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
          });
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
            $(this).find('.menuwrap span').toggleClass('up'); // 화살표 회전
          });
        
          $('.menuwrap .text .menuBusiness.customer').on('click', function() {
            $('.menuwrap .hideSubmenu.second').slideToggle(300); // 서브메뉴 슬라이드 토글
            $(this).find('.menuwrap span').toggleClass('up'); // 화살표 회전
          });
        });
      












//       // store 상세 슬라이드

//       $(function () {
//         let storeSwiper = null;
      
//         function initStoreSwiper() {
//           const windowWidth = $(window).width();
      
//           if (windowWidth > 1024) {
//             if (!storeSwiper) {
//               storeSwiper = new Swiper('.store-slider', {
//                 effect: 'fade',
//                 fadeEffect: {
//                   crossFade: true,
//                 },
//                 navigation: {
//                   nextEl: '.store-slider > .swiper-button-next',
//                   prevEl: '.store-slider > .swiper-button-prev',
//                 },
//                 spaceBetween: 30,
//                 slidesPerView: 1,
//                 allowTouchMove: false,
//                 loop: true
//               });
//             }
//           } else {
//             if (storeSwiper) {
//               storeSwiper.destroy(true, true);
//               storeSwiper = null;
//             }
//           }
//         }
      
//         // ✅ 외부 슬라이더만 조건 적용
//         initStoreSwiper();
//         $(window).on('resize', initStoreSwiper);
      
//         // ✅ 내부 슬라이더는 항상 실행
//         document.querySelectorAll('.inner-slider').forEach((sliderEl) => {
//           new Swiper(sliderEl, {
//             pagination: {
//               el: sliderEl.querySelector('.swiper-pagination'),
//               type: 'bullets',
//               clickable: true,
//             },
//             // navigation: {
//             //   nextEl: sliderEl.querySelector('.swiper-button-next'),
//             //   prevEl: sliderEl.querySelector('.swiper-button-prev'),
//             // },
//             spaceBetween: 10,
//             slidesPerView: 1,
//             loop: true,
//           });
//         });
//       });
//         $(function () {
//   const params = new URLSearchParams(window.location.search);
//   const store = params.get("store"); // 예: sinsa, hannam, dosan 등
//   const storeList = ["hannam", "sungsu", "dosan", "samcheong", "sinsa"];
//   const initialIndex = storeList.indexOf(store); // 해당 매장의 인덱스 찾기

//   let storeSwiper = null;

//   function initStoreSwiper() {
//     const windowWidth = $(window).width();

//     if (windowWidth > 1024) {
//       if (!storeSwiper) {
//         storeSwiper = new Swiper('.store-slider', {
//           effect: 'fade',
//           fadeEffect: {
//             crossFade: true,
//           },
//           navigation: {
//             nextEl: '.store-slider > .swiper-button-next',
//             prevEl: '.store-slider > .swiper-button-prev',
//           },
//           spaceBetween: 30,
//           slidesPerView: 1,
//           allowTouchMove: false,
//           loop: true,
//           initialSlide: initialIndex >= 0 ? initialIndex : 0 // ✅ 여기 반영!
//         });
//       }
//     } else {
//       if (storeSwiper) {
//         storeSwiper.destroy(true, true);
//         storeSwiper = null;
//       }
//     }
//   }

//   // 실행
//   initStoreSwiper();
//   $(window).on('resize', initStoreSwiper);

//   // 내부 슬라이더 항상 실행
//   document.querySelectorAll('.inner-slider').forEach((sliderEl) => {
//     new Swiper(sliderEl, {
//       pagination: {
//         el: sliderEl.querySelector('.swiper-pagination'),
//         type: 'bullets',
//         clickable: true,
//       },
//       spaceBetween: 10,
//       slidesPerView: 1,
//       loop: true,
//     });
//   });
// });
        //   768px 이하 햄버거바
    $(function(){
      $('.menubar').on('click',function(){
          $('.menuwrap').addClass('on');
      });
      $('.closebtn').on('click',function(){
          $('.menuwrap').removeClass('on');
      });
  })

  //768px 이하 서브메뉴 접기
  $(function(){
      $('.menuwrap .text .menuBusiness.shop').on('click',function(){
          $('.menuwrap .hideSubmenu.first').toggleClass('hide');
      });
      $('.menuwrap .text .menuBusiness.customer').on('click',function(){
          $('.menuwrap .hideSubmenu.second').toggleClass('hide');
      });
  })

  $(function(){
    $('.menuwrap .text .menuBusiness.shop').on('click',function(){
        $('.menuwrap .text .menuBusiness.shop span').toggleClass('up');
    });
    $('.menuwrap .text .menuBusiness.customer').on('click',function(){
        $('.menuwrap .text .menuBusiness.customer span').toggleClass('up');
    });
})
