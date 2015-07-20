(function(root, factory) {
  if (typeof define === 'function' && define.amd) define([], factory);
  else root.unsortArray = factory();
}(this, function() {
  'use strict';

  function unsortArray(array) {
    array.sort(function() {
      return Math.random() - 0.5;
    });
  }

  return unsortArray;
}));
