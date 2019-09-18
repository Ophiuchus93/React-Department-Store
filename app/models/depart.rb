class Depart < ApplicationRecord
  has_many :items, dependent: :destroy
end
