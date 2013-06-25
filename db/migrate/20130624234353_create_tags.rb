class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :user_id, :null => false
      t.integer :photo_id, :null => false
      t.integer :x_coord, :null => false
      t.integer :y_coord, :null => false
      t.timestamps
    end
  end
end
