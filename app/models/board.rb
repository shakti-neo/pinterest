class Board < ActiveRecord::Base
  belongs_to :user
  has_many :pins
  validates :name, presence: :true
  validates :description, presence: :true
  mount_base64_uploader :cover, BoardCoverUploader

  after_create :assign_default_board_cover

  private
    def assign_default_board_cover
      board_cover = File.new(Rails.root + "public/board_cover.jpg", "r")
      self.cover = board_cover
      self.save
    end
end
