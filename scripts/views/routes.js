'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage));
page('/allbook', () => app.Book.fetchAll(app.bookView.initIndexPage));
page ('/form' ,() => app.bookView.initAddBookPage);
page();
