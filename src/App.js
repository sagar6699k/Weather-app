import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";
import axios from "axios"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  color: darkblue;
  opacity: 0.6;
  font-family: sans-serif;

`

const AppLable = styled.span`
color: darkblue;
font-size: 25px;
font-weight: 600;

`


function App() {


  const [city, setCity] = useState("")
  const [weather, setWeather] = useState()

  const FetchWeather = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=036f71b67894ca92a5c5eaaad5d6fc5e`)
    // console.log(res.data);
    setWeather(res.data)
  }

  console.log(weather);
  return (
    <Container>
      <AppLable>React Weather App</AppLable>
     
      {/* <CityComponent setCity={setCity} FetchWeather={FetchWeather}/> */}
      {/* <WeatherComponent/> */}

      {weather ? (<WeatherComponent weather={weather}/>):(<CityComponent setCity={setCity} FetchWeather={FetchWeather}/>)}
      
    </Container>
  );
}

export default App;


//5999685b1272cb2824709cfdffe2b06e
// https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=036f71b67894ca92a5c5eaaad5d6fc5e