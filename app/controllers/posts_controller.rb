class PostsController < ApplicationController

  def index
    render json: Post.all
end

def show
    post = Post.find(params[:id])
    render json: post
end

def create
    post = Post.create(post_params)
    render json: post
end

def destroy
    Post.destroy(params[:id])
    render json: Post.all
end

def update
    post  = Post.find(params[:id])
    post.update_attributes(post_params)
    render json: post
end

private

def post_params
    params.require(:post).permit(:user_id, :title, :date, :content)
end

end
