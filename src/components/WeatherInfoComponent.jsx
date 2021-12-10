import styled from "styled-components";

const WeatherCondition = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  margin: 20px auto;
  font-size: 20px;

  & span {
    font-size: 40px;
  }
`;
const WeatherLogo = styled.img`
  margin: 50px auto;
`;

const Location = styled.span`
  font-size: 30px;
  font-weight: 600;
  font-family: sans-serif;
`;
const WeatherInfolable = styled.span`
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  margin: 25px 10px 10px 30px;
  width: 80%;
  text-align: start;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;


const WeatherInfoComponent = (props) => {
    const {name, value , icon} = props;
    return (
        <InfoContainer>
            <InfoIcon src={icon}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};



const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather.weather[0]?.icon?.includes('d')

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}



  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`|${weather?.weather[0].description}`}
        </Condition>
        {/* <WeatherLogo src="https://fixmywp.com/wp-content/uploads/2014/06/cloud-computing-wifi-concept-xs-1280x720.jpg" /> */}
        <WeatherLogo src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`} />
      </WeatherCondition>

      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfolable>WeatherInfo</WeatherInfolable>
      
      <WeatherInfoContainer>
          <WeatherInfoComponent name={isDay? "Sunset": "Sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} icon="https://cdn-icons-png.flaticon.com/128/869/869869.png" />
          <WeatherInfoComponent name="Humidity" value={`${weather?.main?.humidity}%`} icon="https://cdn-icons-png.flaticon.com/512/4005/4005754.png" />
          <WeatherInfoComponent name="Wind" value={`${weather?.wind?.speed}`} icon="https://cdn-icons-png.flaticon.com/512/824/824695.png" />
          <WeatherInfoComponent name="Pressure" value={`${weather?.main?.pressure}`} icon="https://cdn-icons-png.flaticon.com/512/1808/1808263.png" />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
