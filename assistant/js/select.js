$(document).ready(function(){
 $(".option").hide();
 $(".select_img").bind("click",function()
     {
       $(".option").fadeIn(800);
     }); 
 
 $(".option li").hover(function(){
     $(this).addClass("selected").siblings().removeClass("selected");
    }).bind("mouseup",function(){
     $(".option").fadeOut(1);
     var txt = $(this).html();
     var input = document.getElementsByTagName("input");
     input[0].value = txt;
       
    });
 $(this).bind("mouseup",function(){
     //如果ul还显示着，将其隐藏
     if($(".option").css("display") == "block")
     {
      $(".option").fadeOut(0); 
     }
    });
 
});