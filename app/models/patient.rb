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
class Patient < ApplicationRecord
  has_many :diary_entries
  validates :first_name, :last_name, :email, presence: true
end
