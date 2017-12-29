'use strict';

page('/'
, (ctx, next) => app.Book.fetchAll(() => app.bookView.initIndexPage(ctx, next))
, (ctx, next) => app.adminView.verify(ctx, next)
);

page('/books/:id'
    ,(ctx,next) => app.Book.fetchOne(ctx, () => app.bookView.initDetailPage(ctx, next))
    , (ctx, next) => app.adminView.verify(ctx, next));

page ('/new', app.bookView.initAddBookPage);

page('/books/:id/update' 
    , (ctx, next) => app.Book.fetchOne(ctx, next)
    , ctx => app.bookView.initUpdateFormPage(ctx))

page('/admin', (ctx, next) => app.adminView.initAdminPage(ctx,next));    

page();
