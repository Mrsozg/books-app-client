'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage));
page ('/new', app.bookView.initAddBookPage);
page();

// redirect me to the home page on any other endpoint.