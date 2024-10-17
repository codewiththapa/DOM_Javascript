
const box = document.querySelector('#box');
const btn = document.querySelector('button');

let  bulb = 0 ;

btn.addEventListener('click',()=>{

  if(bulb == 0){
  box.style.backgroundColor = 'yellow'
  btn.innerHTML = 'ON';
  bulb = 1;
  }else{
    box.style.backgroundColor = 'green'
     btn.innerHTML = 'OFF';
    bulb = 0;
  };

})