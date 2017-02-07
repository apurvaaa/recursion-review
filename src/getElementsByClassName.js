// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className) {
  var documentBody = document.body;
  var children = documentBody.childNodes;
  var results = [];
  results = recursiveClassName(className, documentBody, results);
  // for (var i = 0; i < children.length; i++) {
  //   results = recursiveClassName(className, children[i], results);
  // }
  return results;
};

var recursiveClassName = function (className, node, results) {
  if (node.classList === null || node.classList === undefined) {
    return results;
  } 
  if ( node.classList.length !== 0 && (node.classList.value.includes(className)) ) {
    results.push(node);
  }
  for (var i = 0; i < node.childNodes.length; i++) {
    results = recursiveClassName(className, node.childNodes[i], results);
  }
  return results;
};
