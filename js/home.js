
var types = ['tote', 'yellow-tote', 'scoring-platform', 'mid-step', 'bin', 'litter'];

var images = [];
for (i = 0; i < 6; i++) {
	images[i] = $('<img src="images/' + types[i] + '.png">');
	images[i].css('width', (0.0625 * $(window).width()) + 'px');
}

$(document).ready(function() {
	$('section#palette div').on('dragstart', function(event) {
		event = event.originalEvent;
		var $img = images[$('section#palette div').index(this)];
		event.dataTransfer.setDragImage($img[0], $img.width() / 2, $img.height() / 2);
		event.dataTransfer.setData('type', $(this).attr('id'));
	});
	$('section#main').on('dragover', function(event) {
		event.originalEvent.preventDefault();
	});
	$('section#main').on('drop', function(event) {
		event = event.originalEvent;
		var id = event.dataTransfer.getData('type');
		var x = event.pageX - Math.floor(0.03125 * $(window).width());
		var y = event.pageY - 10;
		var stack = $('<div style="top: ' + y + 'px; left: ' + x + 'px;"><img src="images/' + id + '.png" class="' + id + '" draggable="false"></div>');
		stack.appendTo(this);
		stack.fadeIn('fast');
		stack.find('img').on('dragstart', function(event) {
			startDrag(event.originalEvent, $(this).attr('class'));
		});
	});
});
