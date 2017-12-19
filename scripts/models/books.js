'use strict';
var app = app || {};


//Define a static property on Book called all, and assign an empty array as it's value.
//Define a static method on Book called loadAll which takes rows as an argument, and sorts rows by title, maps //over rows to create an array of Book instances, and then assigns the new array of Books to Book.all.
(function (module) {
  function Book(rawDataObj) {

    Object.keys(rawDataObj).forEach(key =>{this[key] = rawDataObj[key]},this);
  }
  Book.all = [];

  Book.prototype.toHtml = function() {
  var template = Handlebars.compile($('#book-list-template').text());

  return template(this);
};
  module.Book = Book;
})(app);
