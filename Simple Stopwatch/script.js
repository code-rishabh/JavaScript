const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const userInput = document.getElementById('user-input');

startBtn.addEventListener('click', ()=>{
   const duration = userInput.value;
   console.log(duration); 
})

