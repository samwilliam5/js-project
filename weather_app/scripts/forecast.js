// const api = 'AcdNdx5Y1XMlXhFqT7Yasp3b99rKP5h7';
class Forecast{
    constructor(){
        this.key = 'AcdNdx5Y1XMlXhFqT7Yasp3b99rKP5h7';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'; 
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weathers = await this.getWeather(cityDetails.Key);
        return {cityDetails , weathers };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        console.log(data[0]);
     
        return data[0];
    }
    async getWeather(id){
        const query =`${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        console.log(data[0]);
    
        return data[0];
    }
}

// const fetched = async (city) =>{
//    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//    const query = `?apikey=${api}&q=${city}`;

//    const response = await fetch(url + query);
//    const data = await response.json();
//    console.log(data[0]);

//    return data[0];
// };

// const weather = async (id) =>{
//     const url = `http://dataservice.accuweather.com/currentconditions/v1/`;
//     const query =`${id}?apikey=${api}`;

//     const response = await fetch(url + query);
//     const data = await response.json();
//     console.log(data[0]);

//     return data[0];
// };
 
getCity('chennai')
.then(data => weather(data.Key))
.then(data => console.log(data))
.catch(err => console.error(err));


