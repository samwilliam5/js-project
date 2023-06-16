const clock = document.querySelector('.clock');

const  now = new Date();
const date = dateFns.format(now,'dddd Do MMMM YYYY');
const clockRun = () =>{
   const hour = now.getHours();
   const minute = now.getMinutes();
   const second = new Date().getSeconds();
   const innerHTML = `<span>${hour}</span> : <span>${minute}</span> : <span>${second}</span>`;
   clock.innerHTML = innerHTML;
   

};

setInterval(clockRun,1000);



