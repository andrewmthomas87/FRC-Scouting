
$(document).ready(function() {
	$('section#palette div').on('dragstart', function(event) {
		startDrag(event.originalEvent, $(this).attr('id'));
	});
	$('section#main').on('dragover', function(event) {
		event.originalEvent.preventDefault();
	});
	$('section#main').on('drop', function(event) {
		event = event.originalEvent;
		alert(JSON.stringify(event));
		var id = event.dataTransfer.getData('type');
		var x = event.pageX - Math.floor(0.03125 * $(window).width());
		var y = event.pageY - 10;
		var stack = $('<div style="top: ' + y + 'px; left: ' + x + 'px;"><img src="images/' + id + '.png" class="' + id + '"></div>');
		stack.appendTo(this);
		stack.fadeIn('fast');
		stack.find('img').on('dragstart', function(event) {
			startDrag(event.originalEvent, $(this).attr('class'));
		});
	});
});

function startDrag(event, type) {
	event.dataTransfer.setData('type', type);
}
