App.Models.Photo = function(attrs){
  this.setAttributes(attrs);
}

App.Models.Photo.baseUrl = "/photos";

App.Models.Photo.fetch = function (callback) {
  $.ajax({
    url: this.baseUrl + ".json",
    type: "get",
    success: function (photosAttributes) {
      App.Models.Photo._all =
        _(photosAttributes).map(function (photoAttributes) {
          return new App.Models.Photo(photoAttributes);
        });

      if (callback) {
        callback(App.Models.Photo._all);
      }
    }
  });
};

App.Models.Photo.find = function(inputId){
  return _(App.Models.Photo._all).findWhere({id: inputId});
}

App.Models.Photo.create = function (attrs, callback) {
  $.ajax({
    url: this.baseUrl + ".json",
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

App.Models.Photo.save = function(attrs, callback){
  if (attrs.id) {
    var photo = _(this._all).findWhere({ id: parseInt(attrs.id) });
    photo.update(attrs, callback);
  } else {
    this.create(attrs, callback);
  }
};

App.Models.Photo.prototype.destroy = function (callback) {
  var that = this;

  $.ajax({
    url: this.constructor.baseUrl + "/" + this.id + ".json",
    type: "delete",
    success: function (photoAttributes) {

      var index = App.Models.Photo._all.indexOf(that);
      App.Models.Photo._all.splice(index, 1);

      if (callback){
        callback(photoAttributes);
      }
    }
  });
}

App.Models.Photo.prototype.setAttributes = function(attrs){
  var that = this;
  _(attrs).each(function(value,key) {
    that[key] = value;
  });
}
