'use strict';
var app = app || {};


(function (module) {
  function Book(rawDataObj) {

    Object.keys(rawDataObj).forEach(key => { this[key] = rawDataObj[key]}, this);
  }
  Book.all = [];

  Book.prototype.toHtml = function() {
  var template = Handlebars.compile($('#book-list-template').text());

  return template(this);
};

Book.loadAll = rawData => {
  rawData.sort((a,b) => (new Title(b.title)) - (new title(a.title)))

  /* OLD forEach():
rawData.forEach(articleObject => Article.all.push(new Article(articleObject)));
*/
  Book.all = rawData.map(bookObject => new Book(bookObject));
};

  module.Book = Book;
})(app);
