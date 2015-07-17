(function(root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['dataURItoBlob'], factory);
  else
    root.download = factory(dataURItoBlob);
}(this, function(dataURItoBlob) {
  'use strict';

  return function(data, filename) {
    var that = this;
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    var blob = dataURItoBlob(data, 'octet/stream');
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    !moz && window.URL.revokeObjectURL(url);
    a.parentNode.removeChild(a);
  };
}));
