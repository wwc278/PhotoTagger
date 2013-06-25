PhotoTagger::Application.routes.draw do
  resource :session, :only => [:new, :create, :destroy]
  resources :users
  resources :photos, :only => [:index, :create, :show]
end
