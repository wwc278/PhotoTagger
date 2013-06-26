# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  x_coord    :integer          not null
#  y_coord    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  attr_accessible :user_id, :photo_id, :x_coord, :y_coord

  belongs_to :user
  belongs_to :photo
end
