import wiki from 'wikijs';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import react from 'react';
// const wiki = require('wikijs').default;
let count = 0;
let results = [];
let htmlresults = '';
// wiki().page('Batman')


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function wikicall (limit=5,queue = 'Schadenfreude'){
  if (typeof queue === "string" ){
    queue=[queue];
  }
  if (count >= limit){
    return null;
  }
  count += 1;
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


function wikicallRand (limit=5,queue = 'Schadenfreude'){
  if (typeof queue === "string" ){
    queue=[queue];
  }
  if (count >= limit){
    debugger;
    return null;
  }
  count += 1;
  console.log(count);
  console.log(results);
  wiki().page(queue.shift())
  .then(page => page.links())
  .then(links=>{
    queue.push(links[getRandomInt(0,links.length)]);
    links.forEach(function(el){
      results.push(el);
    });
  })
  .then(setTimeout(()=>wikicallRand(limit,queue),3000));
  console.log('results',results);
}

wikicallRand(15,'bread');
// let numUniqueHits = [...new Set(results)].length;
//
// wiki().page('Leavening_agent').then(page => {debugger;}
// );

function wikicall2 (){
  if (count >= 5){
    return null;
  }
  count += 1;
  wiki().page('batman').then(page => page.html())
  .then(html =>{
    htmlresults = html;
    let regReturn = /<a href="\/wiki\/(.*?)"/.exec(htmlresults)[1];
    let queue = regReturn;
    wiki().page('batman')
    .then(page => page.links())
    .then(links=>{
      links.forEach(function(el){
        results.push(el);
      });
      debugger;
    });
  })
  .then(setTimeout(()=>wikicall2(),7000));
  debugger;
}
// wikicall2();

// .then(page => {debugger;});
//
