$( function () {
 var ht= $(window).height();//브라우저의 높이를 ht에 저장
 $('section').height(ht);//브라우저 높이와 section높이를 같게
 
 $(window).on('resize',function(){
	 var ht = $(window).height();
	$('section').height(ht);
	 
 });
 //$(window).trigger('resize');
 
 $("#menu li").on('click',function(e){
	 e.preventDefault();
	 
	 var ht= $(window).height();
	 
	 var i = $(this).index();
	 
	 var nowTop = i * ht;

	 $('html,body').stop().animate({"scrollTop":nowTop},1300);
	 
 });
 
 
	// 처음 페이지 키자마자 첫화면 실행
		$(".v2").addClass("active");
		$(".v3").addClass("active");
		$(".v5").addClass("active");
		$(".v6").addClass("active");




 $(window).on('scroll',function(){
	 
	 var ht = $(window).height();
	 var scroll = $(window).scrollTop();  //스크롤바의 위치
	 
	 if(scroll >= ht * 0 && scroll < ht *1) {
		 $("#menu li").removeClass();
		 $("#menu li").eq(0).addClass('on');
		 
		 $(".v2").addClass("active");
		 $(".v3").addClass("active");
		 $(".v5").addClass("active");
		 $(".v6").addClass("active");
		 
		$(".g2").removeClass("active");
		$(".g2_").removeClass("active");
		$(".g3").removeClass("active");
		$(".g4").removeClass("active");
		$(".g5").removeClass("active");
		$(".g7").removeClass("active");
		$(".g8").removeClass("active");		 
		 
		$(".rs1").removeClass("active");		
		$(".rs2").removeClass("active");		
		$(".rs4").removeClass("active");		
		$(".rs5").removeClass("active");		 
		
		$(".m1").removeClass("active");		
		$(".m2").removeClass("active");		
		$(".m3").removeClass("active");		
		$(".m4").removeClass("active");		
		$(".m5").removeClass("active");		
		$(".m6").removeClass("active");		
		$(".m7").removeClass("active");		
		$(".m8").removeClass("active");		
		 
	 }
	 
	  if(scroll >= ht * 1 && scroll < ht *2) {
		 $("#menu li").removeClass();
		 $("#menu li").eq(1).addClass('on'); //index1 해당하는 li 에 on부여
		
		$(".v2").removeClass("active");
		$(".v3").removeClass("active");
		$(".v5").removeClass("active");
		$(".v6").removeClass("active");
		
		$(".g2").addClass("active");
		$(".g2_").addClass("active");
		$(".g3").addClass("active");
		$(".g4").addClass("active");
		$(".g5").addClass("active");
		$(".g7").addClass("active");
		$(".g8").addClass("active");
		
		$(".rs1").removeClass("active");		
		$(".rs2").removeClass("active");		
		$(".rs4").removeClass("active");		
		$(".rs5").removeClass("active");		 
		
		$(".m1").removeClass("active");		
		$(".m2").removeClass("active");		
		$(".m3").removeClass("active");		
		$(".m4").removeClass("active");		
		$(".m5").removeClass("active");		
		$(".m6").removeClass("active");		
		$(".m7").removeClass("active");		
		$(".m8").removeClass("active");			
		
		
	 
	 }
	 if(scroll >= ht * 2 && scroll < ht *3) {
		 $("#menu li").removeClass();
		 $("#menu li").eq(2).addClass('on'); //index2 해당하는 li 에 on부여
		
		$(".v2").removeClass("active");
		$(".v3").removeClass("active");
		$(".v5").removeClass("active");
		$(".v6").removeClass("active");
		 
		$(".g2").removeClass("active");
		$(".g2_").removeClass("active");
		$(".g3").removeClass("active");
		$(".g4").removeClass("active");
		$(".g5").removeClass("active");
		$(".g7").removeClass("active");
		$(".g8").removeClass("active");			
		
		$(".rs1").addClass("active");		
		$(".rs2").addClass("active");		
		$(".rs4").addClass("active");		
		$(".rs5").addClass("active");		

		$(".m1").removeClass("active");		
		$(".m2").removeClass("active");		
		$(".m3").removeClass("active");		
		$(".m4").removeClass("active");		
		$(".m5").removeClass("active");		
		$(".m6").removeClass("active");		
		$(".m7").removeClass("active");		
		$(".m8").removeClass("active");			
	}
	  if(scroll >= ht * 3 && scroll < ht *4) {
		 $("#menu li").removeClass();
		 $("#menu li").eq(3).addClass('on'); //index3 해당하는 li 에 on부여
		 
		$(".v2").removeClass("active");
		$(".v3").removeClass("active");
		$(".v5").removeClass("active");
		$(".v6").removeClass("active");
		 
		$(".g2").removeClass("active");
		$(".g2_").removeClass("active");
		$(".g3").removeClass("active");
		$(".g4").removeClass("active");
		$(".g5").removeClass("active");
		$(".g7").removeClass("active");
		$(".g8").removeClass("active");	

		$(".rs1").removeClass("active");		
		$(".rs2").removeClass("active");		
		$(".rs4").removeClass("active");		
		$(".rs5").removeClass("active");		
		
		$(".m1").addClass("active");		
		$(".m2").addClass("active");		
		$(".m3").addClass("active");		
		$(".m4").addClass("active");		
		$(".m5").addClass("active");		
		$(".m6").addClass("active");		
		$(".m7").addClass("active");		
		$(".m8").addClass("active");		
		
		
		
	}
	 
 });
 
// 마우스 휠이동에 따른 스크롤 애니메이션 구현
 // jquery.mousewheel.min.js 와 연동 - > 휠스크롤
 //jquery.easing.1.3.js와 연동 - > 애니메이션 easing 효과
 
 $('section').on('mousewheel',function(event,d){
	 
	
	 if(d>0){
		 var prev = $(this).prev().offset().top;
		 $('html,body').stop().animate({"scrollTop":prev},1300,"easeInOutQuint");
		 
	 }
	 
	  if(d<0){
		 var next = $(this).next().offset().top;
		 $('html,body').stop().animate({"scrollTop":next},1300,"easeInOutQuint");
		 
	 }
	 
	 
	 
 });
 
 $('section').on("mousemove",function(e){
	 
	 var posX = e.pageX;
	 var posY = e.pageY;
	 /*1페이지*/
	 $('.p11').css({'right':20-(posX/30),'bottom':20-(posY/30)});
	 $('.p12').css({'right':130-(posX/20),'bottom':-40+(posY/20)});
	 $('.p13').css({'right':60+(posX/20),'top':180+(posY/20)});
	 
	  /*2페이지*/
	  $('.p21').css({'right':0-(posX/30),'bottom':0-(posY/30)});
	  $('.p22').css({'right':130-(posX/50),'bottom':-40-(posY/50)});
	 /*3페이지*/
	   $('.p31').css({'right': 280 - (posX / 30),'bottom': 30 - (posY / 30)});
       $('.p32').css({'right': 110 + (posX / 20),'bottom': -270 + (posY / 20)});
        $('.p33').css({'right': -70 + (posX / 20),'bottom': -130 + (posY / 20)});
	 
	/*4페이지*/ 
	 $('.p41').css({'right':20-(posX/30),'bottom':-120-(posY/30)});
	 $('.p42').css({'right':0-(posX/20),'bottom':-180-(posY/20)});
	 
	 
	 
	 
 });
 
 
 
 
 
 
 
 
 
// -----------------------------------------------
 
 
 
 
   
 
 
 
 
 // -----------------------------------------------
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

});