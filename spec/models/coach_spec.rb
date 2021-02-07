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
require 'rails_helper'

RSpec.describe Coach, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
