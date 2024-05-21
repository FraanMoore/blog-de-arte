class CreateCanvas < ActiveRecord::Migration[7.1]
  def change
    create_table :canvas do |t|
      t.string :title
      t.string :price
      t.string :integer

      t.timestamps
    end
  end
end
