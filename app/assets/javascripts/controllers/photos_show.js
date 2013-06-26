App.Controllers.PhotoShow = function(photo){
  this.photo = photo;
  this.$el = $("<div></div>");
};

App.Controllers.PhotoShow.prototype.render = function(){
  var templateFn = JST['templates/photo_show_template'];
  var renderedContent = templateFn({photo: this.photo});

  this.$el.html(renderedContent);
  this.installHandlers();

  return this.$el;
}

App.Controllers.PhotoShow.prototype.installHandlers = function(){
  var that = this;

  this.$el.find('.delete').on('click', function(event){
    event.preventDefault();
    photo_id = parseInt(event.currentTarget.attributes['data-id'].value);
    var photo = App.Models.Photo.find(photo_id);
    photo.destroy(function(){
      var photoIndex = new App.Controllers.PhotoIndex(App.Models.Photo._all);
      $("#content").html(photoIndex.render());
    });
  });

  this.$el.find('.photo').on('click', function(event){
    event.preventDefault()
    var x_coord = event.offsetX / event.currentTarget.width;
    var y_coord = event.offsetY / event.currentTarget.height;
    // left off here
  })
}