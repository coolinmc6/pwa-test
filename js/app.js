if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js', {}) // you can control the scope
		.then(function() {
			console.log('Service worker registered!')
		});
}