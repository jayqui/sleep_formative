Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'diary_entries#index'
  resources :diary_entries, only: %i[index show new create]
end
