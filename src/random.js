(function(root, factory) {
  if (typeof define === 'function' && define.amd) define([], factory);
  else root.random = factory();
}(this, function() {
  'use strict';

  var Random = {
    string: function(length) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = length; i--;)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    integer: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    float: function(min, max) {
      return Math.random() * (max - min) + min;
    },
    unsort: function(array) {
      array.sort(function() {
        return Math.random() - 0.5;
      });
      return array;
    }
  };

  return Random;
}));
