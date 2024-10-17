// to select all <h1> node use ...           document.querySelectorAll('h1')


const dom = document.querySelectorAll('h1');  

dom.forEach(function(element){
  console.log(element);
})

// ElementById...
const byId = document.getElementById('box');
console.log(byId); 

//ElementByClass..

const byClass = document.getElementsByClassName('notbox');
console.log(byClass);

//  NOTE: BUT THE BEST WAY TO SELECT ELEMENT BY USING ....         querySelector()