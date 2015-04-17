# mouse-parallax V 0.0.1
Whee! here we go:

This is the start of a JS experiement testing out tying mouse movements to various DOM elems wrapped in a parent. Trying to make this agnostic as I can, but there's some caveats:

1. Only works on browsers with CSS transforms and querySelectorAll (throws error otherwise... will be addressed before it hits 0.1)
2. No dependencies, all vanilla. Will probably work into a directive for Angular (probs 0.5?)

So how do you use it? Great question!

1. Get the main.js file in /dist
2. Bring it into your local project, rename it to whatever your lil' heart desires
3. Set up your DOM
	a. Set a parent element to track mouse to (EX: <div>)
	b. Give this parent the id of mouse-move-wrapper (EX: <div id="mouse-move-wrapper">)
	c. For elements that move around a lot, give them a class of more-move (EX: <div class="move-more">)
	d. For elements that move around less, give them a class of move-less (EX: <div class="move-less">)
4. Set up your CSS
	a. Set the parent-move-wrapper to a position of relative
	b. Set the children to w/e (just not static, they need a position property!)
	c. Position the element on init w/ top/right/bottom/left
5. Set up Javascript
	a. call the function jsMouseTrack(integer) to kick it off
	b. I dunno, party?

So the difference here is anything with a class of move-less will move half as much as move more elements. They're tied to where the mouse is in relation to the parent element, so I'd recommend making that element full width. Built w/ love by Matt Egan.
