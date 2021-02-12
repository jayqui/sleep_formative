# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

example_user = Patient.create!(
  first_name: "Example",
  last_name: "User",
  email: "example_user@example.com",
)

14.times do |n|
  logged_at = Time.find_zone("America/Chicago").local(2020, 2, (n + 2), 8)
  naps_count = rand(3)
  nap_minutes_total = naps_count * rand(30)
  bed_entry_time = logged_at.advance(minutes: rand(-480..-360))
  sleep_try_time = bed_entry_time + rand(20).minutes
  awakenings_count = rand(3)
  awakenings_duration = awakenings_count * rand(40)
  medications = Array.new(rand(4)) { Faker::Science.element }

  DiaryEntry.create!(
    patient: example_user,
    logged_at: logged_at,
    naps_count: naps_count,
    nap_minutes_total: nap_minutes_total,
    bed_entry_time: bed_entry_time,
    sleep_try_time: sleep_try_time,
    sleep_onset_duration: rand(20),
    awakenings_count: awakenings_count,
    awakenings_duration: awakenings_duration,
    awoke_at: logged_at - 1.hour,
    arose_at: logged_at.advance(minutes: rand(-60..-30)),
    medicated: medications.any?,
    medications: medications,
  )
end
