class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :url, :null => false
      t.integer :owner_id, :null => false

      t.timestamps
    end
  end
end
