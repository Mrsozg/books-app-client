'use strict';
var app = app || {};

(function (module) {
  function Book(rawDataObj) {
  // REVIEW: In Lab 8, we explored a lot of new functionality going on here.
  // Let's re-examine the concept of context. Normally, "this" inside of a constructor function refers to the newly instantiated object.
  // However, in the function we're passing to forEach, "this" would normally refer to "undefined" in strict mode.
  //As a result, we had to pass a second argument to forEach to make sure our "this" was still referring to our instantiated object.
  //One of the primary purposes of lexical arrow functions, besides cleaning up syntax to use fewer lines of code, is to also preserve context.
  //That means that when you declare a function using lexical arrows, "this" inside the function will still be the same "this" as it was outside the function.
  //As a result, we no longer have to pass in the optional "this" argument to forEach!
    Object.keys(rawDataObj).forEach(key =>this[key] = rawDataObj[key]);
  }
  module.Article = Article;
})(app);
