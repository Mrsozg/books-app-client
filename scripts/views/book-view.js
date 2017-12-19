var app = app || {};
var bookView = {};

(function (module) {
    bookView.initIndexPage = () => {
<<<<<<< HEAD

     };
    module.Book = Book;
})(app);
=======
        var template = Handlebars.compile($(‘.book-data’).text());

        app.Book.numWordsByAuthor().forEach(stat => $(‘.book-stats’).append(template(stat)));
     
        $(‘#blog-stats .articles’).text(app.Article.all.length);
        $(‘#blog-stats .words’).text(app.Article.numWordsAll());
      };
    module.Book = Book;
})(app);

.hides()

.show()
>>>>>>> 6c3ce2d7f2d9b69308e01f7294cc5057b047d492
