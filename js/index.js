$(function() {
	var ranVideo = Math.floor((Math.random() * 5) + 1);
	var videoFile = 'vid/background-' + ranVideo + '.mp4';

	$('#bgvid source').attr('src', videoFile);
	$('#bgvid')[0].load();
});