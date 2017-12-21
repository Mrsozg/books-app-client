'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = function (err) {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')));
    $('#book-count').append(module.Book.all.length);
  };
  bookView.initDetailPage = function (err) {
    $('.container').hide();
    $('#detail-desc').empty();
    $('.detail-view').show();
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-desc-template')));
  };

  module.bookView = bookView;
})(app)
