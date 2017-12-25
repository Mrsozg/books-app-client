'use strict'

var app = app || {};

(function (module) {
  const bookView = {}
  /   $('.icon-menu').on('click', function(event) {
    //     $('.nav-menu').slideToggle(350);
    //   })
    
    //   function resetView() {
    //     $('.container').hide();
    //     $('.nav-menu').slideUp(350);
    //   }
    

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('#detail-desc').empty();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')));
    $('#book-count').append(module.Book.all.length);
  }

  //   bookView.initIndexPage = function(ctx, next) {
//     resetView();
//     $('.book-view').show();
//     $('#book-list').empty();
//     module.Book.all.map(book => $('#book-list').append(book.toHtml()));
//     next()
//   }

  bookView.initDetailPage = (id, callback) =>{
    $('.container').hide();
    $('#detail-desc').empty();
    $('.detail-view').show();
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-desc-template')));
    $('.book-container').on('click', 'button', function(e){
      module.Book.removeOne($(this).data('bookid'))
    })
  }

//   bookView.initDetailPage = function(ctx, next) {
//     resetView();
//     $('.detail-view').show();
//     $('.book-detail').empty();
//     let template = Handlebars.compile($('#book-detail-template').text());
//     $('.book-detail').append(template(ctx.book));

//     $('#update-btn').on('click', function() {
//       page(`/books/${$(this).data('id')}/update`);
//     });

//     $('#delete-btn').on('click', function() {
//       module.Book.destroy($(this).data('id'));
//     });
//     next()
//   }

  bookView.initAddBookPage = () => {
    $('.container').hide();
    $('#detail-desc').empty();
    $('.form-view-container').show();
    $('#add-book').on('submit', module.bookView.submit)
  }


//   bookView.initCreateFormPage = function() {
//     resetView();
//     $('.create-view').show();
//     $('#create-form').on('submit', function(event) {
//       event.preventDefault();

//       let book = {
//         title: event.target.title.value,
//         author: event.target.author.value,
//         isbn: event.target.isbn.value,
//         image_url: event.target.image_url.value,
//         description: event.target.description.value,
//       };

//       module.Book.create(book);
//     })
//   }
  


//   bookView.initUpdateFormPage = function(ctx) {
//     resetView();
//     $('.update-view').show()
//     $('#update-form input[name="title"]').val(ctx.book.title);
//     $('#update-form input[name="author"]').val(ctx.book.author);
//     $('#update-form input[name="isbn"]').val(ctx.book.isbn);
//     $('#update-form input[name="image_url"]').val(ctx.book.image_url);
//     $('#update-form textarea[name="description"]').val(ctx.book.description);


//     $('#update-form').on('submit', function(event) {
//       event.preventDefault();

//       let book = {
//         book_id: ctx.book.book_id,
//         title: event.target.title.value,
//         author: event.target.author.value,
//         isbn: event.target.isbn.value,
//         image_url: event.target.image_url.value,
//         description: event.target.description.value,
//       };

//       module.Book.update(book, book.book_id);
//     })
//   };

//   bookView.initSearchFormPage = function() {
//     resetView();
//     $('.search-view').show();
//     $('#search-form').on('submit', function(event) {
//       event.preventDefault();

//       let book = {
//         title: event.target.title.value || '',
//         author: event.target.author.value || '',
//         isbn: event.target.isbn.value || '',
//       };

//       module.Book.find(book, bookView.initSearchResultsPage);

//       event.target.title.value = '';
//       event.target.author.value = '';
//       event.target.isbn.value = '';
//     })
//   }




//   bookView.initSearchResultsPage = function() {
//     resetView();
//     $('.search-results').show();
//     $('#search-list').empty();
//     module.Book.all.map(book => $('#search-list').append(book.toHtml()));
//     $('.detail-button a').text('Add to list').attr('href', '/');
//     $('.detail-button').on('click', function(e) {
//       module.Book.findOne($(this).parent().parent().parent().data('bookid'))
//     });
//   }


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
    window.location = '../';
  }
  
  
  module.bookView = bookView;
})(app)


