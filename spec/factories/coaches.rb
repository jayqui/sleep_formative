# == Schema Information
#
# Table name: coaches
#
#  id         :bigint           not null, primary key
#  email      :string
#  first_name :string
#  last_name  :string
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :coach do
    title { 'MyString' }
    first_name { 'MyString' }
    last_name { 'MyString' }
    email { 'MyString' }
  end
end
