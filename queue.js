import wiki from 'wikijs';
// const wiki = require('wikijs').default;
let count = 0;
let results = [];
// wiki().page('Batman')
function wikicall (limit=5,queue = 'Schadenfreude'){
  if (typeof queue === "string" ){
    queue=[queue];
  }
  if (count >= limit){
    return null;
  }
  count +=1;
  console.log(count);
  console.log(results);
  wiki().page(queue.shift())
  .then(page => page.links())
  .then(links=>{
    queue.push(links[links.length-1]);
    results.push(links[links.length-1]);
  })
  .then(setTimeout(()=>wikicall(limit,queue),3000));
}

wikicall(5);



// .then(page => {debugger;});
