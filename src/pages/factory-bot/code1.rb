# Transient on callback

factory :user do
  transient do
    upcased { false }
  end

  name { "John Doe" }

  after(:create) do |user, evaluator|
    user.name.upcase! if evaluator.upcased
  end
end

create(:user).name
#=> "John Doe"

create(:user, upcased: true).name
#=> "JOHN DOE"
