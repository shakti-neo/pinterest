class CommentsController < ApplicationController

  before_action :authenticate_user!

  def index
  end

  def show
  end

  def new
  end

  def create
    @comment = Comment.new(comment_body)
    @pin = comment_pin
    set_comment_to_pin_and_user
    @comments = @pin.comments.reorder('created_at DESC').includes(:user).as_json(:include => {:user => {:only => [:avatar, :email]}})
    respond_to do |format|
      format.json { render json: { :pin => @pin, :uploader => @pin.user, :comments => @comments  }, status: :ok }
    end
  end

  def update
  end

  def destroy
  end

  private
    def set_comment_to_pin_and_user
      @comment.user = current_user
      @pin.comments << @comment
      @comment.save
      @pin.save
    end

    def comment_body
      params.require(:comment).permit(:comment)
    end

    def comment_pin
      id = params.require(:comment)["pin_id"]
      Pin.find(id)
    end
end