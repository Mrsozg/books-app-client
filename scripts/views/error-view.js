'use strict';
var app =app ||{};
(function(module){
  const errorview{};
  errorView.initIndexPage =function(err){
    ${'.container'}.hide();
    ${'.error-view'}.show();
    module.Book.all.map(book => $(`#book-list`).append(book.toHtml()));
  }
  module.bookView = bookView
})(app)

$(() => app.Book.fetchAll(app.bookView)) //DOCUMENT.READY
