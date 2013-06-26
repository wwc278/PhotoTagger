App.Models.Tag = function(attrs){
  this.setAttributes(attrs);
}

App.Models.Tag.prototype.setAttributes = function(){
  var that = this;
  _(attrs).each(function(value,key) {
    that[key] = value;
  });
}

App.Models.Tag.create = function(attrs, callback){
  $.ajax({
    url: "/photos/" + attrs.photo_id + "/" + ".json",
    type: "post",
    data: attrs,
    success: function (photoAttributes) {
      var photo = new App.Models.Photo(photoAttributes);

      App.Models.Photo._all.push(photo);

      if (callback) {
        callback(photo);
      }
    }
  });
};


