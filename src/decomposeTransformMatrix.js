(function(root, factory) {
  if (typeof define === 'function' && define.amd)
    define([], factory);
  else
    root.decomposeTransformMatrix = factory();
}(this, function() {
  'use strict';

  return function decomposeMatrix(matrix) {
    var scaleX, scaleY, skew,
      A = matrix[0],
      B = matrix[1],
      C = matrix[2],
      D = matrix[3];

    if (A * D - B * C) {
      scaleX = Math.sqrt(A * A + B * B);
      skew = (A * C + B * D) / (A * D - C * B);
      scaleY = (A * D - B * C) / scaleX;
      if (A * D < B * C) {
        skew = -skew;
        scaleX = -scaleX;
      }
    } else {
      scaleX = scaleY = skew = 0;
    }

    return {
      translateX: myParse(matrix[4]),
      translateY: myParse(matrix[5]),
      rotate: myParse(Math.atan2(B, A) * 180 / Math.PI),
      skewX: myParse(Math.atan(skew) * 180 / Math.PI),
      skewY: 0,
      scaleX: myParse(scaleX),
      scaleY: myParse(scaleY)
    };
  };
}));
