class CreateDiaryEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :diary_entries do |t|
      t.datetime :logged_at
      t.integer :naps_count
      t.integer :nap_minutes_total
      t.datetime :bed_entry_time
      t.datetime :sleep_try_time
      t.integer :sleep_onset_duration
      t.integer :awakenings_count
      t.integer :awakenings_duration
      t.datetime :awoke_at
      t.datetime :arose_at
      t.boolean :medicated
      t.string :medications
      t.integer :quality
      t.text :comments
      t.belongs_to :patient

      t.timestamps
    end
  end
end
