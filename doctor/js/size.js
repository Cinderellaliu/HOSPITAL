$(document).on("input propertychange","#text",function(){
	if ($('#text').val().length > 1000){
		alert ('超过字数');
		$("#text").val($("#text").val().substring (0, 1000)) 
	}   
	$("#size").text($('#text').val().length);
}); 





