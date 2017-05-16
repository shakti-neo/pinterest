class CommentsController < ApplicationController

  before_action :authenticate_user!

  def index
  end

  def show
  end

  def new
  end

  def create
    @comment = Comment.new(comment: params.require(:comment)[:comment])
    @pin = Pin.find(params.require(:comment)[:pin_id])
    @comment.user = current_user
    @pin.comments << @comment
    @comment.save
    @pin.save
    respond_to do |format|
      format.json { render json: {}, status: :ok }
    end
  end

  def update
  end

  def destroy
  end
end