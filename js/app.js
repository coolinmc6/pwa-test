var version = 2;
console.log('Version #' + version + ': App.js loaded');

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js', {scope: '/'}) // you can control the scope
		.then(function() {
			console.log('Service worker registered!')
		})
		.catch(function(err) {
	      console.log(err);
	    });
}