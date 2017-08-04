# Wiki Crawler


[Wiki Crawler live][github]

[github]: https://github.com/Mordecailloyd/crawler



Wiki Crawler is a front-end application which provides data visualizations for pulled information from wikipedia pages. Wiki Crawler is built entirely on the front-end using Javacript. The site dynamically renders the graph as new links are hit and crawled for information.




# Features & Implementation


### Crawling

Wiki Crawler targets a users starting link and makes a request to the WIKI api to fetch all links from the page. At present it will choose a link randomly from those available and make a new request to this link, again crawling all of the links available and holding the information in a hash.



### Data Visualization

Wiki Crawler builds a graph of the 15 most found links on the ten crawled pages. It retrieves all links from the given wikipedia page and builds a Hash with them. While the crawled begins fetching data from the next chosen link the program will collapse all elements in the hash and count collisions to build a dataset which will ultimately be turned into objects to build a graph. By building the graph in this fashion the delay between fetching the data in an ajax request and parsing it, is not as visible to the user. The user additionally gets a feeling for the kind of links found commonly on given pages by comparing the graph with the re-rendered list of hit links.



# Screenshots

## Search

![results screenshot](https://github.com/Mordecailloyd/crawler/blob/master/images/image4.png)

## Graph

![product screenshot](https://github.com/Mordecailloyd/crawler/blob/master/images/image3.png)

![product screenshot](https://github.com/Mordecailloyd/crawler/blob/master/images/image2.png)

# Future Directions for the Project

### Different Search Types

Most of the work necessary to search by first and last link alphabetically exists. Several hours of work are required to fetch the first link on the page (Avoiding certain links is proving troublesome) and build buttons/ input fields for users to choose which kind of search to begin.

### Multiple Graph Types

Allow users to choose more graph types/data to display based on the crawled information. The potential  here is near limitless and will prove a fruitful effort for personal curiosity.

### Graph Information

Build a column for the graphs showing interesting information such as the number of links with only one instance through all crawled pages ( the logic is already written ) or what percentage of links contain more than one hit.

### Combined Graph Creation

Build a web graph that combines the data from multiple searches to show path-ing toward a given link (ie: philosophy, graphing the links crawled through rather than the links found.) Allowing the graph to grow dynamically as future searches are made. This will take a large amount of work however it will be very useful to defeat the challenges involved in creating a graph.

###  Asynchronous Calls

Develop a way to request the crawled information asynchronously to speed up the rate of fetching information. Using set-timeouts functions however it is not optimal.
