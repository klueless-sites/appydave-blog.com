# Handle reserved words in factory_bot

factory :user do
  name { "John Doe" }
  add_attribute(:new) { true }
  add_attribute(:do) { 'Just do it' }
  add_attribute(:end) { 'in the beginning' }
end

create(:user, new: false, do: 'done it', end: 'the end')
