'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('#detail-desc').empty();
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

  bookView.initAddBookPage = () => {
    $('.container').hide();
    $('#detail-desc').empty();
    $('.form-view-container').show();
    $('#add-book').on('submit', module.bookView.submit)
  }

  bookView.submit = () =>{
    console.log("Test");
    app.bookView.initIndexPage;
  }


  bookView.submit = event => {
    event.preventDefault();
    var book = new module.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image-url').val(),
      description: $('#description').val()
    });
    book.create();
  }
  
  
  module.bookView = bookView;
})(app)
