$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(function(){
  Splitting();  //대문자로쓴다!!!
});


// gotop
$(function () {
  const triggerPoint = $('.about-third').offset().top + $('.about-third').outerHeight(); // 섹션1 아래 기준

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

$(function() {
  function initScrolla() {
    // 먼저 기존 scrolla 적용 제거
    $('.animate').off(); 
    
    if (window.innerWidth <= 390) {
      // 390px 이하: .txtBox에서 .animate 임시 제거
      $('.txtBox').removeClass('animate');
  
      // 나머지 animate 요소에만 scrolla 적용
      $('.animate').scrolla({
        mobile: true,
        once: false
      });
  
      // 나중에 다시 animate 붙여놓기 (필요 시)
      $('.txtBox').addClass('animate');
    } else {
      // 전체 적용 (모든 .animate 요소 포함)
      $('.animate').scrolla({
        mobile: true,
        once: false
      });
    }
  }
  
  $(document).ready(function () {
    initScrolla();
  });
  
  $(window).on('resize', function () {
    initScrolla();
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



$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function () {

      // 가로 스크롤 구성
      let list = gsap.utils.toArray(".history-track li");
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: '.about-history',
          pin: true,
          scrub: 1,
          start: 'center center',
          end: '300%',
        }
      });

      // .desc-ko 텍스트 애니메이션 (스크롤 시 올라오며 나타남)
      list.forEach((el) => {
        const desc = el.querySelector(".desc-ko");
        if (!desc) return;
        gsap.set(desc, { opacity: 0, y: 100 });
        gsap.fromTo(desc,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              containerAnimation: scrollTween, // 가로스크롤 트리거 연결
              start: "left center",
              end: "right center",
              toggleActions: "play reverse play reverse" // 반복 실행 가능하게
              // markers: true // 디버깅용
            }
          }
        );
      });
    }
  });
    })


    $(function () {
      new Swiper('.autoSwiper', {
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        speed: 1000,
        fadeEffect: { crossFade: true }
      });

      if (window.innerWidth < 761) {
        const ul = document.querySelector('.rightTxt');
        if (!ul) return;

        const wrapper = document.createElement('div');
        wrapper.classList.add('swiper-wrapper');

        Array.from(ul.children).forEach(li => {
          li.classList.add('swiper-slide');
          wrapper.appendChild(li);
        });

        const swiperContainer = document.createElement('div');
        swiperContainer.classList.add('swiper', 'textSwiper');
        swiperContainer.appendChild(wrapper);

        const pagination = document.createElement('div');
        pagination.classList.add('swiper-pagination');
        swiperContainer.appendChild(pagination);

        ul.replaceWith(swiperContainer);

       new Swiper('.textSwiper', {
  effect: 'fade',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  fadeEffect: {
    crossFade: true
  }
});
      }


      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.matchMedia({
      
        "(min-width: 391px)": function () {
      function splitTextWithLineBreaks(selector) {
        document.querySelectorAll(selector).forEach(paragraph => {
          const originalHTML = paragraph.innerHTML;
          paragraph.innerHTML = '';
      
          const parser = new DOMParser();
          const parsed = parser.parseFromString(`<div>${originalHTML}</div>`, 'text/html').body.firstChild;
      
          parsed.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
              // 일반 텍스트 처리
              node.textContent.split('').forEach(char => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                paragraph.appendChild(span);
              });
            } else if (node.nodeName === 'BR') {
              // br 태그 유지
              paragraph.appendChild(node.cloneNode());
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              // span, strong 등 요소 안 텍스트도 처리
              const wrapper = document.createElement(node.nodeName.toLowerCase());
              for (let attr of node.attributes) {
                wrapper.setAttribute(attr.name, attr.value);
              }
      
              node.textContent.split('').forEach(char => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                wrapper.appendChild(span);
              });
      
              paragraph.appendChild(wrapper);
            }
          });
        });
      }
      
      if (window.innerWidth >= 1024) {
        splitTextWithLineBreaks('.kor');
        splitTextWithLineBreaks('.eng');
      }
      

splitTextWithLineBreaks('.about-third .texts p');

// 3. 애니메이션 설정
gsap.utils.toArray('.about-third .texts span').forEach(span => {
  // 개별 초기 transform 값 적용
  gsap.set(span, {
    x: gsap.utils.random(-300, 300),
    y: gsap.utils.random(-200, 200),
    rotate: gsap.utils.random(-180, 180),
    opacity: 0
  });
});

// 4. ScrollTrigger로 자연스럽게 모으기
gsap.to('.about-third .texts span', {
  scrollTrigger: {
    trigger: '.about-third',
    start: '10% center',
    end: '50% center',
    scrub: true,
    markers: false // 개발 시 true로 켜도 좋음
  },
  x: 0,
  y: 0,
  rotate: 0,
  opacity: 1,
  duration: 2,
  ease: 'power2.out',
  stagger: {
    each: 0.005,
    from: 'random'
  }
});
      
}
    
});

      gsap.utils.toArray('.txts').forEach(function(txts){
        gsap.timeline({
            scrollTrigger:{
                trigger:txts,
                start:'40% center',
                toggleClass:{'targets':txts, className:'active'},
                // markers:true,
                scrub:1
            }
        })
      })



      gsap.utils.toArray('.collection').forEach(function(collection){
        gsap.timeline({
            scrollTrigger:{
                trigger:collection,
                start:'100% center',
                toggleClass:{'targets':collection, className:'active'},
                // markers:true,
                scrub:1
            }
        })
    })

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
    
      "(min-width: 391px)": function () {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-product',
        start: 'top center',
        end:'35% center',
        scrub: true,
        // markers: true
      }
    })
    .to('.about-product .collection', { x:'-150px', ease: 'none' }, 0)
    .to('.about-product .collection span', { x:'250px', ease: 'none' }, 0)
  }
})
   
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-more",
        start: "10% center",
        end: "35% center",
        scrub: true,
        // markers: true,  // 필요하면 켜서 위치 확인
      }
    });
    
    const chars = gsap.utils.toArray(".about-more .char");
    
    timeline.to(chars, {
      color: "#fff",
      duration: 1,
      ease: "none",
      stagger: 0.03,
    });
    
    // 이미지 등장 애니메이션
    timeline.to(".fade-img", {
      filter: "blur(0px) brightness(100%)",
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2
    }, ">0.3"); // 텍스트 끝나고 0.5초 후 시작

    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-last',
        start: 'top center',
        end:'center center',
        scrub: 3,
        // markers: true
      }
    })
    .to('.about-last .rightTxt li:nth-child(1)', {opacity:1, ease: 'none' }, 0)
    .to('.about-last .rightTxt li:nth-child(2)', {opacity:1, ease: 'none' },'+=0.1')
    .to('.about-last .rightTxt li:nth-child(3)', {opacity:1, ease: 'none' },'+=0.1')
    .to('.swiper',{opacity:1, ease:"none",duration:1},0)

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
    
      "(min-width: 1621px)": function () {
    
        gsap.timeline({
          scrollTrigger: {
            trigger: '.about-second',
            pin: true,
            pinSpacing: false,
            start: 'center center',
            end: '+=300%',
            scrub: 1,
            transformOrigin: 'center bottom'
          }
        })
        .to('.about-second', { scale: 20, ease: 'none', duration: 1 })
        .to('.about-second .txts', { opacity: 0 });
    
        gsap.timeline({
          scrollTrigger: {
            trigger: '.about-third',
            start: '10% center',
            scrub: 1
          }
        })
        .to('.about .about-third video', { opacity: 1 });
    
      }
    
    });


    
    });

  