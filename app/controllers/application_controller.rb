class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session
  protect_from_forgery unless: -> { request.format.json? }


  before_action :configure_permitted_parameters, if: :devise_controller?
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
  end

  private
  
  def after_sign_in_path_for(resource)
		"/home"
  end
  
end
