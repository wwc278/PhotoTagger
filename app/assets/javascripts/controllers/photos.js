App.Controllers.PhotoIndex = function(photos){
  this.photos = photos;
  this.$el = $("<div></div>");
};

App.Controllers.PhotoIndex.prototype.render = function(){

  var templateFn = JST['templates/photos_template'];
  var renderedContent = templateFn({photos: this.photos});

  this.$el.html(renderedContent);
  this.installHandlers();

  return this.$el;
}

App.Controllers.PhotoIndex.prototype.installHandlers = function(){
  var that = this;

  this.$el.find('form').on('submit', function(event){
    event.preventDefault();
    App.Models.Photo.save($(event.currentTarget).serialize(),
    function(){
      that.render();
    });
  })

  this.$el.find('.photo').on('click', function(event){
    event.preventDefault();
    var photo_id = parseInt(event.currentTarget.attributes['data-id'].value);
    var photo = App.Models.Photo.find(photo_id);
    var photoShow = new App.Controllers.PhotoShow(photo);
    $("#content").html(photoShow.render());
  });

  this.$el.find('.delete').on('click', function(event){
    event.preventDefault();
    var photo_id = parseInt(event.currentTarget.attributes['data-id'].value);
    var photo = App.Models.Photo.find(photo_id);
    photo.destroy(function(){
      that.render();
    });

  })

}