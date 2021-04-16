var data = null;

function ready() {
	if (document.readyState == 'complete') {
		Webcam.set({
			width: 1280, // dest
			height: 720,
			width: 2560, // live preview size
			height: 1960,
            image_format: 'jpeg',
            jpeg_quality: 100
});
		try {
			Webcam.attach('#camera');
		} catch (e) {
			alert(e);
		}
	}
}

function snap() {
	return data;
}
window.take_snapshot = function() {
	// take snapshot and get image data
	try {
		Webcam.snap(function (data_uri) {
			data = data_uri;
			document.getElementById("result").innerHTML = '<img id = "captured_image" src="' + data_uri + '"/>'
		});
	} catch (e) {
	}
	
}
window.Alert = function (message) {
	alert(message);
}
