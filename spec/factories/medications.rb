# == Schema Information
#
# Table name: medications
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :medication do
    name { "MyString" }
  end
end
