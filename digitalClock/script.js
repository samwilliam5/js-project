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

const fetched = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    console.log(response);
    if(response.status !== 200){
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return data;
};

fetched()
.then(data => console.log(data))
.catch(err => console.log(err.message));

