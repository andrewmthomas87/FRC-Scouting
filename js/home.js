
$(document).ready(function() {
	$('section#palette div').on('dragstart', function(event) {
		event = event.originalEvent;
		event.dataTransfer.setData('type', $(this).attr('class'));
	});
	$('section#main').on('dragover', function(event) {
		event.originalEvent.preventDefault();
	});
	$('section#main').on('drop', function(event) {
		event = event.originalEvent;
		var type = event.dataTransfer.getData('type');
		var spacer = $('<div class="spacer"></div>');
		var stack = $('<div style="display: none" class="stack" draggable="false"><img src="images/' + type + '.png"></div>');
		stack.on('drop', function(event) {
			return false;
		});
		spacer.appendTo(this);
		stack.appendTo(this);
		stack.fadeIn('fast');
	});
});
