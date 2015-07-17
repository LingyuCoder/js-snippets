(function(root, factory) {
  if (typeof define === 'function' && define.amd)
    define([], factory);
  else
    root.dataURItoBlob = factory();
}(this, function() {
  'use strict';

  return function dataURItoBlob(dataURI, dataTYPE) {
    var binary = atob(dataURI.split(',')[1]),
      array = [];
    for (var i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
    return new Blob([new Uint8Array(array)], {
      type: dataTYPE
    });
  };
}));
