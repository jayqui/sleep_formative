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
FactoryBot.define do
  factory :diary_entry do
    logged_at { '2021-02-07 07:45:28' }
    naps_count { 1 }
    nap_minutes_total { 1 }
    bed_entry_time { '2021-02-07 07:45:28' }
    sleep_try_time { '2021-02-07 07:45:28' }
    sleep_onset_duration { 1 }
    awakenings_count { 1 }
    awakenings_duration { 1 }
    awoke_at { '2021-02-07 07:45:28' }
    arose_at { '2021-02-07 07:45:28' }
    medicated { false }
    medications { 'MyString' }
    quality { 1 }
    comments { 'MyText' }
  end
end
