Rails.application.routes.draw do
  namespace :api do
    resources :departs do
      resources :items
    end
  end
end
