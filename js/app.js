console.log('App.js loaded');

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./js/sw.js', {}) // you can control the scope
		.then(function() {
			console.log('Service worker registered!')
		});
}