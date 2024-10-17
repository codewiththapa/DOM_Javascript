const status = document.querySelector('h5');
const btn = document.querySelector('#add');

let check = 0;

btn.addEventListener('click',()=>{

  if(check === 0){
  status.innerHTML = 'Friends';
  status.style.color = 'green';
  btn.innerHTML = 'Remove';
    check = 1 ;
  }else{
    status.innerHTML = 'Unknown';
    status.style.color = 'red';
    btn.innerHTML = 'Add Friend';
      check = 0;
  }

});

