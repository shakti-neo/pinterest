class Pin < ActiveRecord::Base
  belongs_to :board
  mount_base64_uploader :pin_content, PinContentUploader
  acts_as_commentable
end
