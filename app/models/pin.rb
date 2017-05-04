class Pin < ActiveRecord::Base
  belongs_to :board
  mount_uploader :pin_content, PinContentUploader
end
