
const box = document.querySelector('#box');
const btn = document.querySelector('button');

let  bulb = 0 ;

btn.addEventListener('click',()=>{

  if(bulb == 0){
  box.style.backgroundColor = 'yellow'
  console.log('bulb is turn on');
  bulb = 1;
  }else{
    box.style.backgroundColor = 'green'
    console.log('bulb is turn off');
    bulb = 0;
  };

})