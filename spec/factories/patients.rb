# == Schema Information
#
# Table name: patients
#
#  id         :bigint           not null, primary key
#  email      :string
#  first_name :string
#  last_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :patient do
    first_name { "MyString" }
    last_name { "MyString" }
    email { "MyString" }
  end
end
