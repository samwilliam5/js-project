const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const cloudyIcon = document.querySelector('.icon img');

const forecast = new Forecast();

// const updateCity = async (inputCity) =>{
//     const cityDetails = await fetched(inputCity);
//     const weathers = await weather(cityDetails.Key);
//     return {cityDetails , weathers };

// };

const Dynamic = (data) =>{
    const {cityDetails ,weathers} = data;
    details.innerHTML = ` <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weathers.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weathers.Temperature.Metric.Value}</span>
      <span>&deg;C</span>`;
      card.classList.contains('d-none') && card.classList.remove('d-none') ;
      weathers.IsDayTime ? time.setAttribute('src','/img/day.svg') : time.setAttribute('src','/img/night.svg');
      weathers.WeatherIcon && cloudyIcon.setAttribute('src',`/img/icons/${weathers.WeatherIcon}.svg`)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputCity = form.city.value.trim();
    form.reset();
    
    
    
   forecast.updateCity(inputCity)
   .then(data => Dynamic(data))
   .catch(err => console.error(err));

   localStorage.setItem('city', inputCity);

 });

 if(localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city'))
  .then(data => Dynamic(data))
  .catch(err => console.error(err));

 }

 console.log(window.localStorage);
 console.log(window);


const station =  [
   {
     color: 'red',
      type: 'station wagon',
       registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
       capacity: 5
     },
     {
       color: 'red',
       type: 'cabrio',
       registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
       capacity: 2
     }
   ];

let age = localStorage.setItem('station',JSON.stringify(station));

console.log(localStorage.getItem('station'));


class persons{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.score = 0;
    }
    login(){
      console.log(`${this.name} is logged in`);
      return this;
    }
    logout(){
      console.log(`${this.name} is logged out`);
      return this;
    }
    increment(){
      this.score +=1;
      console.log(`${this.name} is scored ${this.score}`);
      return this;

    }
}


class admin extends persons{
  constructor(name,age,title){
      super(name,age)
      {
        this.title = title;
      }
      }
      deletePerson(p){
        groupOfPersons = groupOfPersons.filter(g => g.name !== p.name);
       }
  }
  



const personOne = new persons('sam',26);
const personTwo = new persons('william',30);
let groupOfPersons = [personOne, personTwo];
const admins = new admin('bob',23,'bob_store');
console.log(personOne.login().logout().increment());
console.log(personTwo.login().logout().increment());

admins.deletePerson(personTwo);

console.log(admins);
console.log(groupOfPersons);









