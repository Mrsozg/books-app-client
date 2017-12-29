'use strict';

var app = app || {};

(function (module) {
  const adminView = {};

  adminView.initAdminPage = function (ctx, next) {
    $('.container').hide();
    $('.admin-view').show();

    $('#admin-form').on('submit', function(event) {
      event.preventDefault();
      let token = event.target.passphrase.value;
      $.get(`${__API_URL__}/api/v1/admin`, {token})
        .then(res => {
          localStorage.token = res;
          page('/');
        })
        .catch(() => page('/'));
    })
  };

  adminView.verify = function(ctx, next) {
    if(localStorage.token === 'false' || localStorage.token === undefined) 
    {
        console.log("DISABLE");
        $('.admin').addClass('adminonly');
    }
    else 
        $('.admin').show();
    next();
  }

  module.adminView = adminView;
})(app)