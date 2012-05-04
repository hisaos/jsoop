// worked with Chrome 18.0.1025.168
// it may be good to use http://www.phpied.com/files/jsoop/ch7.html in test.
document.body.appendChild(document.createElement('div'));
var divem = document.body.childNodes[document.body.childNodes.length - 1];
divem.style.position = "absolute";
divem.style.left = "100px";	// left must be set with string
divem.style.top = "100px";	// top must be set with string
function divCallback(event) {
  var keycode = event.keyCode;	// be careful to use key'C'ode not key'c'ode.
  var left = parseInt(divem.style.left);	//extract only digit part
  var top = parseInt(divem.style.top);
  switch(keycode) {
    case 74:	// j
      left -= 5;
      break;
    case 75:	// k
      left += 5;
      break;
    case 73:	// i
      top -= 5;
      break;
    case 77:	// m
      top += 5;
      break;
  }
  myevent.stopPropagation(event);
  divem.style.left = left + 'px';	// make digit left into string
  divem.style.top = top + 'px';
}
// usage: e.g. in Chrome javascript console, 
// > myevent.addListener(window. 'keydown', divCallback);
