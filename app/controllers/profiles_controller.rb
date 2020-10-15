class ProfilesController < ApplicationController
  
  def index
    render json: Profile.all
end

def show
    profile = Profile.find(params[:id])
    render json: profile
end

def create
    profile = Profile.create(profile_params)
    render json: profile
end

def destroy
    Profile.destroy(params[:id])
    render json: Profile.all
end

def update
    profile  = Profile.find(params[:id])
    profile.update_attributes(profile_params)
    render json: profile
end

private

def profile_params
    params.require(:profile).permit(:user_id, :first_name, :last_name, :date_of_birth, :phone, :email)
end

end
