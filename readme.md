# Wiki Crawler


[Wiki Crawler live][github]

[github]: https://





Outdoor-Adventure-World is a web application inspired by MooseJaw. In contrast to the Moosejaw website, Outdoor-Adventure-World is a single page application that runs off a static page using the React-Redux cycle. My site only re-renders individual components as needed due to changes in slices of the state.
Outdoor-Adventure-World is built on a PostgreSQL database, with a Ruby on Rails back-end. I use Jbuilder to generate JSON objects for the front-end, which is written in Javascript using React and Redux to maintain the single page application.

Wiki Crawler is a front-end application which provides data visualizations for pulled information from wikipedia pages. Wiki Crawler is built entirely on the front-end using Javacript. The site dynamically renders the graph as new links are hit and crawled for information.




# Features & Implementation


### Crawling

Wiki Crawler targets a users starting link and makes a request to the WIKI api to fetch all links from the page. At present it will choose a link randomly from those available and make a new request to this link, again crawling all of the links available and holding the information in a hash.



### Data Visualization

Using the Recharts module

```ruby
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy, :update, :index]
    resources :products, only: [:index, :show]
    resources :carts, only: [:create, :index, :destroy, :show]
    delete "/user/cart/", to: "carts#destroy_all"
  end
  root "static_pages#root"
end
```

### Search Bar Utilizing Query Strings

The search bar located in the header of the website, permits a user to enter their own search terms. They may search by brand name or product name. This input is updated on keypress and the search initiated.
The search is handled on the back-end which takes the user input and strips it of case, white-space, and special characters. A query string is created with this input for the database and the controller returns to the front-end a list of products matching the request.


# Screenshots


## Search

![results screenshot](./docs/screenshots/Search.png)

## Graph

![product screenshot](./docs/screenshots/show.png)

![product screenshot](./docs/screenshots/show_features.png)

# Future Directions for the Project

###

###

###

### 
