// 点击btn关闭遮罩层
    $(document).ready(function(){
        $('.cover').hide();
        $('.judge').hide();
        $('.button').click(function(){
            $('.cover').show();
            $('.judge').show();
        });
        $('.cover').click(function(){
            $('.cover').hide();
            $('.judge').hide();
        });

    
});
window.onscroll=function(){
        document.body.scrollTop = 0
        
}