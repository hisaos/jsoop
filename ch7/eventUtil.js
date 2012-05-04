// worked with Chrome 18.0.1025.168
var myevent = {
  addListener: function(element, eventname, callback) {
    // check element is array or not by checking element.length
    if (element.length) {
      for(i in element) {
        if(element[i].addEventListener) {
          element[i].addEventListener(eventname, callback, false);
        }
      }
    } else {
      element.addEventListener(eventname, callback, false);
    }
  },
  removeListener: function(element, eventname, callback) {
    if(element.length) {
      for(i in element) {
        if(element[i].addEventListener) {
          element[i].removeEventListener(eventname, callback, false);
        }
      }
    } else {
      element.addEventListener(eventname, callback, false);
    }
  },
  getEvent: function(event) {
    if(window.event) { // IE
      return window.event;
    }
    return event;
  },
  getTarget: function(event) {
    return event.target;
  },
  stopPropagation: function(event) {
    event.stopPropagation();
  },
  preventDefault: function(event) {
    event.preventDefault();
  }
}

