'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('#book-list').empty();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')));
    $('#book-count').empty();
    $('#book-count').append(module.Book.all.length);
  }

  bookView.initDetailPage = (id, callback) =>{
    $('.container').hide();
    $('#detail-desc').empty();
    $('.detail-view').show();
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-desc-template')));
  }
  
  bookView.initAddBookPage = () => {
    $('.container').hide();
    $('#bookform')[0].reset();
    $('.form-view-container').show();
    $('#bookform').on('submit', module.bookView.submit)
  }

  bookView.submit = event => {
    event.preventDefault();
    var book = {
      title: event.target.title.value,
      author: event.target.author.value,
      isbn: event.target.isbn.value,
      image_url: event.target.image_url.value,
      description: event.target.description.value
    };
    module.Book.create(book);
  }
  module.bookView = bookView;
})(app)
