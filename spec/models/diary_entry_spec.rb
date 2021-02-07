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
#
require 'rails_helper'

RSpec.describe DiaryEntry, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
