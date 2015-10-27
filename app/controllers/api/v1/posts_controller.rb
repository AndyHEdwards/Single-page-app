class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def show

  end

  def create
    @post = Post.create!(post_params)
    redirect_to root_path
  end

  def update
  end

  def destroy
    @posts = Post.all
    @posts.destroy_all
  end


  private

  def post_params
    params.require(:post).permit(:title, :body)
  end


end
