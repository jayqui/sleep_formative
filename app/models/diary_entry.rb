# == Schema Information
#
# Table name: diary_entries
#
#  id                   :bigint           not null, primary key
#  arose_at             :datetime
#  awakenings_count     :integer
#  awakenings_duration  :integer
#  awoke_at             :datetime
#  bed_entry_time       :datetime
#  comments             :text
#  logged_at            :datetime
#  medicated            :boolean
#  medications          :string
#  nap_minutes_total    :integer
#  naps_count           :integer
#  quality              :integer
#  sleep_onset_duration :integer
#  sleep_try_time       :datetime
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  patient_id           :bigint
#
# Indexes
#
#  index_diary_entries_on_patient_id  (patient_id)
#
class DiaryEntry < ApplicationRecord
  belongs_to :patient
  validates :logged_at, :naps_count, :nap_minutes_total, :bed_entry_time, :sleep_try_time, :sleep_onset_duration, :awakenings_count, :awakenings_duration, :awoke_at, :arose_at, presence: true
end
