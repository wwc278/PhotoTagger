class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_name(params[:user][:name])
    if @user.verify_password(params[:user][:password])
      login(@user)
      redirect_to photos_url
    else
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
