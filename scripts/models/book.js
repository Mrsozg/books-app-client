'use strict'

var app = app || {};

(function(module) {
   var __API_URL__ = 'http://localhost:3000';
  //var __API_URL__ = 'https://ob-jj-booklist.herokuapp.com';

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorView(err);
  };

  function Book(rawBookObj) {
    Object.keys(rawBookObj).map(key => this[key] = rawBookObj[key]);
  };

  Book.prototype.toHtml = function(templateId) {
    // let template = Handlebars.compile($('#book-list-template').text())
    // return template(this)
    return Handlebars.compile($(`#${templateId}`).text())(this);
  };

  Book.all = [];

  Book.loadAll = rows => Book.all = rows.sort((a, b) => a.title - b.title).map(book => new Book(book));
  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback)
    
  Book.fetchOne = (id, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${id}`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback);


  module.Book = Book;
})(app)
