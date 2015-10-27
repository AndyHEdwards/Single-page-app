class Api::V1::UsersController < ApplicationController
  def index

  end

  def show

  end

  def create
    @user = User.create(user_params)
    render text: "thanks for createting an account"
  end

  def update
  end

  def destroy

  end


  private

  def user_params
    params.require(:user).permit(:name)
  end


end
