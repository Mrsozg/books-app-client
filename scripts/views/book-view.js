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

  bookView.initDetailPage = (ctx, next) =>{
    $('.container').hide();
    $('#detail-desc').empty();
    $('.detail-view').show();
    let template = Handlebars.compile($('#book-desc-template').text())
    $('#detail-desc').append(template(ctx.book));
    
    $('#delete').on('click', function() {
      module.Book.destroy($(this).data('id'));
    });
    next();
  }
  
  bookView.initAddBookPage = () => {
    $('.container').hide();
    $('#bookform')[0].reset();
    $('.form-view-container').show();
    $('#bookform').on('submit', module.bookView.submit)
  }

  bookView.submit = event => {
    event.preventDefault();
    let book = {
      title: event.target.title.value,
      author: event.target.author.value,
      isbn: event.target.isbn.value,
      image_url: event.target.image_url.value,
      description: event.target.description.value
    };
    module.Book.create(book);
  }

  bookView.initUpdateFormPage = (ctx) => {
    $('.container').hide();
    $('.update-view').show();
    $('#update-book-form input[name="title"]').val(ctx.book.title);
    $('#update-book-form input[name="author"]').val(ctx.book.author);
    $('#update-book-form input[name="isbn"]').val(ctx.book.isbn);
    $('#update-book-form input[name="image_url"]').val(ctx.book.image_url);
    $('#update-book-form input[name="description"]').val(ctx.book.description);

    $('#update-book-form').on('submit', function(event) {
      event.preventDefault();
      let book = {
        book_id: ctx.book.book_id,
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };
      module.Book.update(book, book.book_id);
    })

  }


  module.bookView = bookView;
})(app)
