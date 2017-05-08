class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
  mount_base64_uploader :avatar, AvatarUploader
  has_and_belongs_to_many :boards

  after_create :assign_default_picture

  private
    def assign_default_picture
      profile_pic = File.new( Rails.root + "public/default_profile.png", "r")
      self.avatar = profile_pic
      self.save
    end
end
