
 // 点击    more关闭遮罩层
    $(document).ready(function(){
        $('.cover').hide();
        $('.scan').hide();
        $('.more i').click(function(){
            $('.cover').show();
            $('.scan').show();
        });
        $('.scan').click(function(){
            $('.cover').hide();
            $('.scan').hide();
        });
    
});



