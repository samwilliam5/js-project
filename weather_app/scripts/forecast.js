const api = 'AcdNdx5Y1XMlXhFqT7Yasp3b99rKP5h7';

const fetched = async (city) =>{
   const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
   const query = `?apikey=${api}&q=${city}`;

   const response = await fetch(url + query);
   const data = await response.json();
   console.log(data[0]);

   return data[0];
};

const weather = async (id) =>{
    const url = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query =`${id}?apikey=${api}`;

    const response = await fetch(url + query);
    const data = await response.json();
    console.log(data[0]);

    return data[0];
};
 
fetched('chennai')
.then(data => weather(data.Key))
.then(data => console.log(data))
.catch(err => console.error(err));


