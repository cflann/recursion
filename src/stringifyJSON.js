// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  /* Base cases 
   * primitives: number, boolean, string
   * null: returns "null"
   */
  if (typeof obj === "number" ||
      typeof obj === "boolean") {
    return obj.toString();
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  }
  /* End base cases */

  /* recur on array elements */
  else if (Array.isArray(obj)) {
    return '[' + obj.map( function(el) {
      return stringifyJSON(el);
    }) + ']';
  }

  /* recur on object properties */
  else {
    var string = "{";
    Object.keys(obj).forEach( function(key, index, keys) {
      if (!(typeof obj[key] === "function" ||   // omit functions,
            typeof obj[key] === "symbol" ||     // symbols,
            typeof obj[key] === "undefined")) { // and undefined values
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
