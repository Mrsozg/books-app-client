var app = app || {};
var bookView = {};

(function (module) {
    bookView.initIndexPage = () => {
        var template = Handlebars.compile($(‘.book-data’).text());

        app.Book.numWordsByAuthor().forEach(stat => $(‘.book-stats’).append(template(stat)));
     
        $(‘#blog-stats .articles’).text(app.Article.all.length);
        $(‘#blog-stats .words’).text(app.Article.numWordsAll());
      };
    module.Book = Book;
})(app);

.hides()

.show()