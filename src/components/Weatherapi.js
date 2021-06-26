import axios from 'axios';

const API_KEY = '66113982537fadf431244f06687155de';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}