$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
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

    
    $(function () {
      $('.point-toggle').on('click', function () {
        const $item = $(this).closest('.point-item');
        const $icon = $(this).find('span');
        const $details = $item.find('.point-details');
    
        // 토글
        $details.slideToggle();
        $icon.toggleClass('lnr-chevron-down lnr-chevron-up');
        $item.toggleClass('active'); // 여기에 active 토글만 추가!
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
