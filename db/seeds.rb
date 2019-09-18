10.times do
  d = Depart.create(
    name: Faker::Commerce.department
  )

10.times do
  i = Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    departs_id: d.id
  )
  end
end

puts "10 Departments/Items seeded"