class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :radio
      t.string :note
      t.boolean :dishes
      

      t.timestamps
    end
  end
end
