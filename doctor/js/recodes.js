// myRecodes
$('.head i').click(function(){
	$('.name h2 p').toggle();
	$('.name h2 input').val($('.name h2 p').text())  ;
	$('.name h2 input').toggle();
	$('.name h2 input').addClass('in');
	
});

$('.name h2 input').blur(function(){
	if($('.name h2 input').val()!='')
	$('.name h2 p').text($('.name h2 input').val());
	$('.name h2 input').hide();
	$('.name h2 p').show();
})
	

//
$('.name span').click(function(){
	$('.name input').val($('.name span').text()) ;
	$('.name input').show();
});

$('.name input').blur(function(){
	if($('.name  input').val()!=''){
		$('.name  span').text($('.name  input').val());
		$('.name  input').hide();
		$('.name  span').show();
	}
})