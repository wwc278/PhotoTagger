module SessionsHelper
  def current_user
    return nil unless session[:token]

    @current_user ||= User.find_by_session_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    token = SecureRandom.urlsafe_base64

    user.session_token = token
    user.save
    session[:token] = token
  end

  def logout
    session[:token] = nil

    if current_user
      current_user.session_token = nil
    end
  end

end
