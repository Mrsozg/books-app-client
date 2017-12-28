'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/:id'
    ,(ctx,next) => app.Book.fetchOne(ctx, () => app.bookView.initDetailPage(ctx, next)));

page ('/new', app.bookView.initAddBookPage);

page('/books/:id/update' 
    , (ctx, next) => app.Book.fetchOne(ctx, next)
    , ctx => app.bookView.initUpdateFormPage(ctx))

page();
