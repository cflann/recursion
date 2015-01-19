// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

  var result = [];

  /* Recursive helper function.
   * Pushes elements to result array if they have
   * matching class names 
   */
  function getEls(node, classes) {
    if (node.nodeType == document.ELEMENT_NODE) {
      
      var match = true;
      for (var i = 0; i < classes.length; i++) {
        if (node.classList.contains(classes[i]) === false)
          match = false;
      }
      if (match)
        result.push(node);
      
      // recur on child nodes
      for (var j = 0; j < node.childNodes.length; j++)
        getEls(node.childNodes[j], classes);
      
    } else if (node.nodeType == document.TEXT_NODE) {
      // do nothing
    }
  }

  var classes = className.split(/\s+/);
  getEls(document.body, classes);

  return result;
  
};
