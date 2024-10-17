/*  4 pillars of DOM :  
1. Selection of an element using Javascript   
2.Changing HTML       3.Changing  C.S.S           4.Event Listener         */


//1. Selection of an element using Javascript   
const heading = document.querySelector('h1');  
console.log(heading);

//2.Changing HTML
heading.innerHTML = ' Changed DOM';

//3.Changing  C.S.S   
heading.style.color = 'green';
heading.style.backgroundColor = 'black';

//4.Event Listener

heading.addEventListener('click',function(){
  console.log('clicked');
})

heading.addEventListener('click',()=>{
  heading.innerHTML = 'DOM and Event Listener Learning';
  heading.style.color = 'blue';
  heading.style.backgroundColor = 'pink';
})