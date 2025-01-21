$(function() {

	if($("#slide-ball").length) {
		$("#slide-ball").draggable({
			axis: 'x',
			containment: 'parent',
			drag: function(event, ui) {
				if (ui.position.left > 550) {
					$("#slide-btn").fadeOut();
				} else {
					// Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
					// $("h2 span").css("opacity", 100 - (ui.position.left / 5))
				}
			},
			stop: function(event, ui) {
				location.replace('contact.html')
				if (ui.position.left < 551) {
					$(this).animate({
						left: 6
					})
				}
			}
		});
		
		// The following credit: http://www.evanblack.com/blog/touch-slide-to-unlock/
		
		$('#slide-ball')[0].addEventListener('touchmove', function(event) {
			event.preventDefault();
			var el = event.target;
			var touch = event.touches[0];
			curX = touch.pageX - this.offsetLeft - 73;
			if(curX <= 6) return;
			if(curX > 550){
				$('#slide-btn').fadeOut();
			}
			el.style.webkitTransform = 'translateX(' + curX + 'px)'; 
		}, false);
		
		$('#slide-ball')[0].addEventListener('touchend', function(event) {	
			this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
			this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
			this.style.webkitTransform = 'translateX(0px)';
		}, false);
	}

});