'use strict';

console.log('\'Allo \'Allo!');

var jsMouseTrack = function(drama) {

	// Testing snippet, probably can be refactored out
	function detectCSSFeature(featurename){
		var feature = false,
		domPrefixes = 'Webkit Moz ms O'.split(' '),
		elm = document.createElement('div'),
		featurenameCapital = null;

		featurename = featurename.toLowerCase();

		if( elm.style[featurename] !== undefined ) { feature = true; } 

		if( feature === false ) {
			featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
			for( var i = 0; i < domPrefixes.length; i++ ) {
				if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
					feature = true;
					break;
				}
			}
		}
		return feature; 
	}

	// test browser support
	if(!document.querySelectorAll || !detectCSSFeature('transform')) {

		throw new Error('this browser doesn\'t support querySelectorAll or CSStransforms, sorry!');

	}

	// our moving pieces
	var masterParent = document.querySelector('#mouse-move-wrapper');
	var slowChildren = document.querySelectorAll('.less-move');
	var quickChildren = document.querySelectorAll('.more-move');

	
	//Final Calcs we'll be using
	var getMousePositionVsMasterParent = function(e){

		// Mouse Pos
		var xMouse = (e.clientX || e.pageX) - masterParent.offsetLeft;
    var yMouse = (e.clientY || e.pageY) - masterParent.offsetTop;

    // parent Pos
    var xParent = masterParent.offsetWidth / 2;
		var yParent = masterParent.offsetHeight / 2;

    var posX = xMouse - xParent;
    var posY = yMouse - yParent;

    return {

    	x: posX,
    	y: posY

    };

	};

	// Calcs done, let's eat some meat...
	var moveElements = function(e, element, amt) {

		// MAAAATH DAMN YOU
		var finalAmt = amt;

		// Alter how much they'll actually move
		var posX = getMousePositionVsMasterParent(e).x / finalAmt;
		var posY = getMousePositionVsMasterParent(e).y / finalAmt;

		var transformString = ('translate(' + posX + 'px, ' + posY + 'px)');

		element.style.webkitTransform = transformString;
		element.style.MozTransform = transformString;
		element.style.msTransform = transformString;
		element.style.OTransform = transformString;
		element.style.transform = transformString;

	};

	masterParent.addEventListener('mousemove', function(e){

		console.log('whaaa');

		for(var i = 0; i < slowChildren.length; i++){

			moveElements(e, slowChildren[i], drama);

		}

		// God dammit JShint
		for(var j = 0; j < quickChildren.length; j++){

			moveElements(e, quickChildren[j], (drama /2));

		}

	});

};

jsMouseTrack(30);