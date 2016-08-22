"use strict";

module.exports.spliceOne = function(arr, index) {
  // manually splice availableRooms array
  // http://jsperf.com/manual-splice
  if (index >= arr.length) {
    return;
  }
  for (var i = index, len = arr.length - 1; i < len; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = len;
}

module.exports.merge = function (a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a;
}

module.exports.logError = function(err) {
  if (err) {
    console.log(err)
  }
}

//
// TODO: there is possibly room for improvement on this method
//
// You can see the impact of changes on this benchmark:
// `node --harmony test/benchmark/patch.js`
//
const toJSON = function (obj) {
  let result

  if (obj && typeof(obj.toJSON)==="function") {
    result = obj.toJSON()

  } else if (obj instanceof Array) {
    result = obj.map((_) => toJSON(_))

  } else {
    result = obj
  }

  if (typeof(result)==="object") {
    let copy = Array.isArray(result) ? [] : {}

    for (var k in result) {
      copy[k] = toJSON(result[k])
    }

    result = copy
  }

  return result
}

module.exports.toJSON = toJSON
