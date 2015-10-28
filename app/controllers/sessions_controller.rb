class SessionsController < ApplicationController

  def create
    user = User.find_by(name: params[:name])
    session[:user_id] = user.id
    render json: {user_id: user.id, userName: user.name}
    #render json: {id: user.id, name: user.name}
  end
end
