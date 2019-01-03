var version = 3;
console.log('Version #' + version + ': App.js loaded');

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/pwa-test/sw.js') // you can control the scope
		.then(function() {
			console.log('Service worker registered!')
		})
		.catch(function(err) {
	      console.log(err);
	    });
}