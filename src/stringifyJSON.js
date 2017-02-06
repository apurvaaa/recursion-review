// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultString = '';
  if ((obj === undefined) || (typeof obj === 'function')) {
    return;
  } else if (obj === null) {
    //null
    return 'null';
  } else if ((typeof obj === 'number') || (typeof obj === 'boolean')) { 
    //numbers and boolean
    return obj.toString();
  } else if (typeof obj === 'string') {
    //strings
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    //recursive arrays
    resultString += '[';
    for (var i = 0; i < obj.length; i++) {
      if ( i !== 0) {
        resultString += ',';
      }
      resultString += stringifyJSON(obj[i]);
    }
    resultString += ']';
  } else if (typeof obj === 'object') {
    //recursive objects
    var keyCounter = 0;
    resultString += '{';
    for (var key in obj) {
      if ((obj[key] !== undefined) && (typeof obj[key] !== 'function' )) {
        if (keyCounter !== 0) {
          resultString += ',';
        }
        resultString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      }
      keyCounter++;
    }
    resultString += '}';
  } 


  return resultString;

};
