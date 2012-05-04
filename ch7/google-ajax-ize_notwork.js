// not working in Chrome 18.0.1025.168 with Access-Control-Allow-Origin.
// assume xhr, myevent, ajax objects.

function submitListener (event) {
  myevent.preventDefault(event);
}
window.addEventListener(window, 'submit', submitListener);

var inputvalue = document.getElementsByTagName('input')['gbqfq'].value;
xhr = new XMLHttpRequest();
function submitCallback() {
  var divem = document.createElement('div');
  divem.id = "content";
  divem.innerHTML = xhr.responseText;
  document.body.appendChild(divem);
}

ajax.request("http://www.google.com/search/", 'post', submitCallback, "q=" + inputvalue);

