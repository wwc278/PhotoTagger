# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  password_digest :string(255)      not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string(255)
#
require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :name, :password

  has_many :photos, :foreign_key => :owner_id

  validates :name, :password, :presence => true

  def password
    @password ||= Password.new(self.password_digest)
  end

  def password=(password)
    @password = BCrypt::Password.create(password)
    self.password_digest = @password
  end

  def verify_password(entered_password)
    BCrypt::Password.new(self.password_digest) == entered_password
  end
end
