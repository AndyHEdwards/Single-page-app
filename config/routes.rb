Rails.application.routes.draw do

  root "site#index"

  resources :sessions

  namespace :api do
    namespace :v1 do
      #resources :posts, except: :destroy do
      #  collection do
      #    delete 'destroy'
      #  end
      #end
      delete "posts" => "posts#destroy"

      resources :users
    end
  end
end
