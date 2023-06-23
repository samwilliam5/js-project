const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const cloudyIcon = document.querySelector('.icon img');
const updateCity = async (inputCity) =>{
    const cityDetails = await fetched(inputCity);
    const weathers = await weather(cityDetails.Key);
    return {cityDetails , weathers };

};

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
    
   updateCity(inputCity)
   .then(data => Dynamic(data))
   .catch(err => console.error(err));
 });
