// worked with Chrome 18.0.1025.168
xhr = new XMLHttpRequest();
ajax = {
  request: function(src, method, callback, query) {
    xhr.onreadystatechange = callback;
    xhr.open(method, src);
    if (method === 'get') {
      xhr.send('');
    } else if (method === 'post' && typeof query !== undefined) {
      xhr.send(query);
    } else {
      alert("something wrong with xhr!");
    }
  }
}
function myCallback(xhr) {
  alert(xhr.responseText);
}

