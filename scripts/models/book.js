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
  //   Book.fetchOne = (ctx, callback) =>
//     $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
//       .then(results => ctx.book = results[0])
//       .then(callback)
//       .catch(errorCallback);

  Book.removeOne = (id) =>{
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'DELETE'
    })
    .catch(module.errorView.initErrorView)
  }

  Book.prototype.create = function(callback){
    console.log(this.author);
    $.post(`${__API_URL__}/api/v1/books`,{author:this.author, title:this.title, isbn:this.isbn,image_url:this.image_url, description:this.description})
    .then(data=> {
      if (callback) callback();
    })
  };

//   Book.create = book =>
//     $.post(`${__API_URL__}/api/v1/books`, book)
//       .then(() => page('/'))
//       .catch(errorCallback);



//   Book.update = (book, bookId) =>
//       $.ajax({
//         url: `${__API_URL__}/api/v1/books/${bookId}`,
//         method: 'PUT',
//         data: book,
//       })
//       .then(() => page(`/books/${bookId}`))
//       .catch(errorCallback)



//   Book.destroy = id =>
//     $.ajax({
//       url: `${__API_URL__}/api/v1/books/${id}`,
//       method: 'DELETE',
//     })
//     .then(() => page('/'))
//     .catch(errorCallback)

//   Book.find = (book, callback) =>
//     $.get(`${__API_URL__}/api/v1/books/find`, book)
//       .then(Book.loadAll)
//       .then(callback)
//       .catch(errorCallback)

//   Book.findOne = isbn =>
//     $.get(`${__API_URL__}/api/v1/books/find/${isbn}`)
//     .then(Book.create)
//     .catch(errorCallback)

  module.Book = Book;
})(app)





