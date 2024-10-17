// WHat is the difference between  'textContent  VS  innerHTML'

const text = document.querySelector("#box");
// while using      .innerHTML     you will get   output : Hello
// text.innerHTML =   "<h1> Hello</h1>" ; 


// while using    .textContent          output : "<h1> Hello</h1>" no changes in element 
text.textContent =   "<h1> Hello</h1>" ;