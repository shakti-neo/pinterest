class AddCoverToBoards < ActiveRecord::Migration
  def change
    add_column :boards, :cover, :string
  end
end
