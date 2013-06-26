class TagsController < ApplicationController
  respond_to :json

  def create
    tag = Tag.create(params[:tag])
    render :json => tag
  end
end
