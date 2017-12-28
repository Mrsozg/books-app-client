'use strict'

var app = app || {};
var __API_URL__ = 'http://localhost:3000';
//var __API_URL__ = 'https://ob-jj-booklist.herokuapp.com';

(function(module) {


  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorView(err);
  };

  function Book(rawBookObj) {
    Object.keys(rawBookObj).map(key => this[key] = rawBookObj[key]);
  };

  Book.prototype.toHtml = function(templateId) {
    return Handlebars.compile($(`#${templateId}`).text())(this);
  };

  Book.all = [];

  Book.loadAll = rows => Book.all = rows.sort((a, b) => a.title - b.title).map(book => new Book(book));
  Book.fetchAll = callback =>{
    $.get(`${__API_URL__}/api/v1/books`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback)
  };
  
  Book.fetchOne = (id, callback) =>{
    $.get(`${__API_URL__}/api/v1/books/${id}`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback)
  };
 

  Book.removeOne = (id) =>{
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'DELETE'
    })
    .catch(module.errorView.initErrorView)
  }

  Book.create = book => {
    $.post(`${__API_URL__}/api/v1/books`, book)
    .then(()=> page('/'));
  };


  Book.destroy = id =>
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'DELETE',
    })
    .then(() => page('/'))
    .catch(errorCallback)


  module.Book = Book;
})(app)





