var version = 5;
console.log('Version #' + version + ': App.js loaded');

var deferredPrompt;

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


window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  // event.preventDefault();
  // deferredPrompt = event;
  return event;
});