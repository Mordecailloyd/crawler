import wiki from 'wikijs';
import  {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ReactDOM from 'react-dom';
import React from 'react';

let count = 0;
const results = [];
let htmlresults = '';


let dataset1 = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

callRender(dataset1);


function callRender (data){
  console.log('render called');
  ReactDOM.render(
    <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey="name"/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="Times Hit" fill="#82ca9d" />
    </BarChart>,
    document.getElementById('foo')
  );
}


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
  wiki().page(queue.shift())
  .then(page => page.links())
  .then(links=>{
    queue.push(links[links.length-1]);
    results.push(links[links.length-1]);
  })
  .then(setTimeout(()=>wikicall(limit,queue),3000));
}


function wikicallRand (queue = 'Schadenfreude',limit=10){
  if (typeof queue === "string" ){
    queue=[queue];
  }
  if (count >= limit){
    count = 0;
    hashMap(results);
    return null;
  }
  count += 1;
  wiki().page(queue.shift())
  .then(page => page.links())
  .then(links=>{
    queue.push(links[getRandomInt(0,links.length)]);
    links.forEach(function(el){
      results.push(el);
    });
  })
  .then(setTimeout(()=>wikicallRand(queue,limit),2500));
}

function wikicallFirst (limit=5,queue = 'Schadenfreude'){
  if (typeof queue === "string" ){
    queue=[queue];
  }
  if (count >= limit){
    hashMap(results);
    return null;
  }
  count += 1;
  let pagesVisited = [];
  let newPage = queue.shift();
  pagesVisited.push(newPage);
  wiki().page(newPage).then(page => page.html())
  .then(html =>{
    htmlresults = html;
    let regReturn = /<a href="\/wiki\/(.*?)"/.exec(htmlresults)[1];
    queue.push(regReturn);
  });
  wiki().page(newPage)
  .then(page => page.links())
  .then(links=>{
    links.forEach(function(el){
      results.push(el);
    });
  })
  .then(setTimeout(()=>wikicallFirst(limit,queue),2500));
  console.log("visited pages",pagesVisited);
}



function wikicall2 (){
  if (count >= 5){
    hashMap(results);
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
  .then(setTimeout(()=>wikicall2(),3000));
  debugger;
}

function hashMap(array){
  let hashObj = {};
  let returnArray = [];
  array.forEach(function(el){
    if (hashObj[el]){
      hashObj[el] += 1;
    }
    else{
      hashObj[el] = 1;
    }
  });
  let keys = Object.keys(hashObj);
  keys.sort(function(a, b) {
    return hashObj[a] - hashObj[b];
  });
  keys=keys.reverse();
  keys=keys.slice(0,10);//top 10 values
  keys.forEach(function(el){
    returnArray.push({'name': el,  'Times Hit': hashObj[el]});
  });
  console.log('return array',returnArray);
  console.log('array',array);
  callRender(returnArray);
}

document.getElementById('makeGraph').addEventListener("click", function(){
  debugger;
  wikicallRand(document.getElementById('textField').value);
});
