$(document).ready(function() {
	$(".button-collapse").sideNav();

	$("#slide-out li").on("click", function(){
		$(".drag-target").trigger('click');
	});
});