# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :string(255)      not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ActiveRecord::Base
  attr_accessible :owner_id, :url

  belongs_to :owner, :class_name => 'User'
end
