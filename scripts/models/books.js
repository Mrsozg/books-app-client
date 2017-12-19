'use strict';
var app = app || {};

var bookView = {};

(function (module) {
  var __API_URL__ = 'http://localhost:3000';
  function errorCallback(err){
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  function Book(rawDataObj) {

    Object.keys(rawDataObj).map(key => this[key] = rawDataObj[key]}, this);
  }
  Book.all = [];

  Book.prototype.toHtml = function() {
  var template = Handlebars.compile($('#book-list-template').text());

  return template(this);
};

Book.loadAll = rows =>  Book.all = row.sort((a,b) => b.title - a.title).map(book => new Book(book));

Book.fetchAll = callback => {
  $.get('/api/v1/books')
    .then(results => {
      Book.loadAll(results);
      callback();
    })
};

  module.Book = Book;
})(app);
