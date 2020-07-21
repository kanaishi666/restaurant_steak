
$(function() {
	$('.Toggle').click(function() {
	$(this).toggleClass('active');

	if ($(this).hasClass('active')) {
	$('.NavMenu').addClass('active');　 //クラスを付与
	} else {
	$('.NavMenu').removeClass('active'); //クラスを外す
	}
	});　//トグルボタンが押されたときに、クラスを付与
	
	$('head').append(
	'<style>body{display:none;}'
	);
	$(window).on("load", function() {
	$('body').delay(100).fadeIn("slow");
	}); //ロード時の表示
	
	$(".answer").css("display", "none");
  // 質問の答えをあらかじめ非表示 
  
  //質問をクリック
  $(".question").click(function () {
    
    $(".question").not(this).removeClass("open");
    //クリックしたquestion以外の全てのopenを取る

    $(".question").not(this).next().slideUp(300);
    //クリックされたquestion以外のanswerを閉じる
    
    $(this).toggleClass("open");
    //thisにopenクラスを付与
    
    $(this).next().slideToggle(300);
    //thisのcontentを展開、開いていれば閉じる
  
  });
	
$(function(){
  var pagetop = $('#pagetop');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

	
});

