
$(document).ready(function() {
	$('section#palette div').on('dragstart', function(event) {
		event.originalEvent.dataTransfer.setData('id', event.target.id);
	});
	$('section#main').on('dragover', function(event) {
		event.originalEvent.preventDefault();
	});
	$('section#main').on('drop', function(event) {
		event = event.originalEvent;
		var id = event.dataTransfer.getData('id');
		var x = event.pageX - Math.floor(0.03125 * $(window).width());
		var y = event.pageY - 10;
		var stack = $('<div style="top: ' + y + 'px; left: ' + x + 'px;"><img src="images/' + id + '.png" class="' + id + '"></div>');
		stack.appendTo(this);
		stack.fadeIn('fast');
	});
});
