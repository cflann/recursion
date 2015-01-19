// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "number" ||
      typeof obj === "boolean") {
    return obj.toString();
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  }
  else if (typeof obj === "function" ||
           typeof obj === "symbol" ||
           typeof obj === "undefined") {
    return '';
  }
  else if (Array.isArray(obj)) {
    return '[' + obj.map( function(el) {
      return stringifyJSON(el);
    }) + ']';
  }
  else {
    var string = "{";
    Object.keys(obj).forEach( function(key, index, keys) {
      console.log('type of key: ', typeof key);
      if (typeof obj[key] === "function" ||
          typeof obj[key] === "symbol" ||
          typeof obj[key] === "undefined") {
        // do nothing
      } else {
        console.log(key, obj[key]);
        string += '"' + key + '":' + stringifyJSON(obj[key]);
        if (index < keys.length-1) {
          string += ',';
        }
      }
    });
    string += "}";
    return string;
  }
};
