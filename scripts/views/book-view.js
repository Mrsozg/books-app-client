'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')));
    $('#book-count').append(module.Book.all.length);
  }

  bookView.initDetailPage = (id, callback) =>{
    $('.container').hide();
    $('#detail-desc').empty();
    $('.detail-view').show();
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-desc-template')));

  }

  bookView.initAddBookPage = (id, callback) =>{
    $('.container').hide();
    $('#detail-desc').empty();
    $('.form-view').show();
    book => $('.add-book').append(book.toHtml('add-book-template'));

  }

  module.bookView = bookView;
})(app)
