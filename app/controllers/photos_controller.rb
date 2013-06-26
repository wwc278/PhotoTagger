class PhotosController < ApplicationController
  respond_to :json
  respond_to :html, :only => :index

  def index
    @photos = current_user.photos
    respond_to do |format|
      format.html {render :index}
      format.json {render :json => @photos}
    end
  end

  def create
    photo = current_user.photos.build(params[:photo])
    if photo.save
      render :json => photo
    else
      render :json => photo, :status => 422
    end
  end

  def show
    photo = Photo.find(params[:id])
    render :json => photo
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
    render :json => photo
  end

  def update
    photo = Photo.find(params[:id])
    photo.update_attributes!(params[:photo])
    render :json => photo
  end
end
