var addCustomAttributeOnClick = function() {
//get utils
var utils = window.optimizely.get('utils');

// wait for element to render and add click event listener
utils.waitForElement('.selector').then(function(element){
	element.addEventListener('click', function(){

// give user clickedFreeTrial custom attribute on 'click'
	window["optimizely"].push({
  	"type": "user",
  	"attributes": {
    	"clickedFreeTrial": true
  	}

});
});
});
};

//wait for Optimizely to initialize so you can use 'get' functions
window["optimizely"] = window["optimizely"] || [];
window["optimizely"].push({
  type: "addListener",
  filter: {
    type: "lifecycle",
    name: "initialized"
  },
  // Add the initialized function as a handler.
  handler: addCustomAttributeOnClick
});
