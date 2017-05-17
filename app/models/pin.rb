class Pin < ActiveRecord::Base
  belongs_to :board
  belongs_to :user
  mount_base64_uploader :pin_content, PinContentUploader
  acts_as_commentable
end
