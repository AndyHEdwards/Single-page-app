Rails.application.routes.draw do

  root "site#index"

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
