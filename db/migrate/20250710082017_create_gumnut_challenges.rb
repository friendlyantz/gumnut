class CreateGumnutChallenges < ActiveRecord::Migration[8.0]
  def change
    create_table :gumnut_challenges do |t|
      t.string :title, limit: 30
      t.date :start
      t.text :rules
      t.string :motivation

      t.timestamps
    end
  end
end
