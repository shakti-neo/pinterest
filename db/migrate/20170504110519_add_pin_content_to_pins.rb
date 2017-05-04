class AddPinContentToPins < ActiveRecord::Migration
  def change
    add_column :pins, :pin_content, :string
  end
end
