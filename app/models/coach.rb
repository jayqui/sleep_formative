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
class Coach < ApplicationRecord
end
