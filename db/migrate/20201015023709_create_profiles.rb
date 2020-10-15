class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :phone
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
