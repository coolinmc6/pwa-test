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



window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  console.log(e);
});


$('.show-text').on('click', function() {
	
	if(deferredPrompt) {
		deferredPrompt.prompt();

		// Wait for the user to respond to the prompt
		  deferredPrompt.userChoice
		    .then((choiceResult) => {
		      if (choiceResult.outcome === 'accepted') {
		        console.log('User accepted the A2HS prompt');
		      } else {
		        console.log('User dismissed the A2HS prompt');
		      }
		      deferredPrompt = null;
		    });
	} else {
		alert('Show text!');
	}
})