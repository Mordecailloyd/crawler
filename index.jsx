import wiki from 'wikijs';
import  {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ReactDOM from 'react-dom';
import React from 'react';

let count = 0;
let results = [];
let htmlresults = '';
let linksHit = [];

let dataset1 = [
      {name: 'Vector Space', 'Times Hit': 6, pv: 2400, amt: 2400},
      {name: 'Mathematics', 'Times Hit': 5, pv: 1398, amt: 2210},
      {name: 'Transpose', 'Times Hit': 5, pv: 9800, amt: 2290},
      {name: 'Exterior Derivative', 'Times Hit': 4, pv: 3908, amt: 2000},
      {name: 'Integral', 'Times Hit': 4, pv: 4, amt: 2181},
      {name: 'Derivative', 'Times Hit': 3, pv: 3, amt: 2500},
      {name: 'Differential Geometry', 'Times Hit': 2, pv: 4300, amt: 2100},
];

callRender(dataset1);


function callRender (data){
  ReactDOM.render(
    <BarChart width={800} height={300} data={data}
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
function callRenderLinks (array){
  const hitLinkList = array.map((el)=>(
    <li key = {el}>{el}</li>
    )
  );
  ReactDOM.render(
    <div>
      <h4>Links Hit</h4>
      <ul>
        {hitLinkList}
      </ul>
    </div>,
    document.getElementById('linkList')
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
    linksHit=[];
    count = 0;
    hashMap(results);
    results = [];
    return null;
  }
  linksHit.push(queue[0]);
  count += 1;
  wiki().page(queue.shift())
  .then(page => page.links())
  .then(links=>{
    setTimeout(()=>hashMap(results),300);
    setTimeout(()=>callRenderLinks(linksHit),350);
    queue.push(links[getRandomInt(0,links.length)]);
    links.forEach(function(el){
      results.push(el);
    });
  })
  .then(setTimeout(()=>wikicallRand(queue,limit),3500));
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
    });
  })
  .then(setTimeout(()=>wikicall2(),3000));
}

function hashMap(array,slice=15){
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
  keys=keys.slice(0,slice);//top 15 values
  keys.forEach(function(el){
    returnArray.push({'name': el,  'Times Hit': hashObj[el]});
  });

  callRender(returnArray);
}

document.getElementById('makeGraph').addEventListener("click", function(){
  wikicallRand(document.getElementById('textField').value);
});
