## Wiki Web Crawler Graphs

### Background

**NB**: You'll probably want to keep the Background section for your production Readme as well.  

This webcrawler will find links on a chosen ( or predetermined) Wikipedia page and create a queue to visit , read, and parse. It will populate a hash or list with the links to build information for graph displays for a user. Time permitting the user will choose a starting location- a graph type- a depth of search- etc. For the webcrawler to traverse. The visual component for this project is the graphs generated by the data crawled through. The user interface is the starting location- material hunted for ( by reg-ex or hard coded options) - depth and breadth of search- graph types and display of information etc.

### Functionality & MVP  

Users will be able to:

- [ ] Crawl wikipedia.
- [ ] See a visual representation of crawled through links.
- [ ] Choose a starting link from wikipedia.
- [ ] Display a graph of most common links found.


### Wireframes

This app will consist of a single screen with a sample graph of data from a given search. As the project progresses additional buttons will be visible giving control over the following elements.
- Graph type
- Starting link
- reg-ex to search for
- depth of search
- options for search( ex: first link found, last link found, median link, mean link.)
![wireframe](image1.jpg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure.
- HTML for visual styling outside of the graph window.
- Wiki-js for cross site requests to websites, Recharts and Victory charts for graph creation.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be four scripts involved in this project:

`crawler.js`: for crawling the various sites and parsing the data .

`queue.js`: for maintaining the order of requests and graph searches.

`graph.js`: for rendering the data in a usable format.

`ui.jsx`: for building the interactivity on the user end.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  Learn the basics of `wiki.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Wiki.js` to render a JSON object of a wiki page.

**Day 2**: Dedicate this day to building the queue and launching further requests from it. Begin work on the User interface. Install and familiarize with graphing suites.

  Goals for the day:

- Complete functionality between Queue and Crawler .js.
- use a test functionality of the graphing files.
- Launch multiple cross site requests from a queue.

**Day 3**: Create the Ui interface..  Build a graph from parsed data from the queries. Style the graph front page.
 Goals for the day:

- Build a graph from parsed data.
- Show a graph on the front end.


**Day 4**: Install the controls for the user to interact with the crawler.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for start location, depth, find queries of certain type.
- Have a styled frontpage, nice looking controls and title.
- If time: build a tutorial that is visual rather than written.


### Bonus features


- [ ] Add options for different crawl styles.
- [ ] Render more graph types.
- [ ] Graphs which render continuously.
