class PhotosController < ApplicationController
  def index
    @photos = current_user.photos

  end

  def create
    @photo = current_user.photos.build(params[:photo])
    if @photo.save
      render :json => @photo
    else
      render :json => @photo, :status => 422
    end
  end
end
