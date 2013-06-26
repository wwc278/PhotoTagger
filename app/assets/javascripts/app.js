var App = {};

App.Models = {};
App.Templates = {};
App.Controllers = {};

$(function () {
  App.Models.Photo.fetch(function (photos) {
    var indexView = new App.Controllers.PhotoIndex(photos);
    $("#content").html(indexView.render());
  });
});