class SessionsController < ApplicationController

  def create
    @user = User.find_by(name: params[:name])
    session[:user_id] = @user.id
    render json: {user_id: @user.id, userName: @user.name}
  end
end
