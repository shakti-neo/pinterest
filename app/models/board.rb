class Board < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :pins
  validates :name, presence: :true
  validates :description, presence: :true
end
