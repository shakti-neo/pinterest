class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
  mount_base64_uploader :avatar, AvatarUploader
  has_many :boards
  has_many :pins, through: :boards
  acts_as_voter

  after_create :assign_default_picture

  before_destroy :delete_all_pins_and_boards

  private
    def assign_default_picture
      profile_pic = File.new( Rails.root + "public/default_profile.png", "r")
      self.avatar = profile_pic
      self.save
    end

    def delete_all_boards
      self.boards.delete_all
    end
end
