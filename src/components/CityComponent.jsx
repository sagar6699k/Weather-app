import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 50%;
    margin: 50px auto;

`

const ChooseCityLable = styled.span`
color: black;
font-size: 25px;
font-weight: 600;
margin: 10px auto;
`

const SearchBox = styled.form`
display: flex;
border: 1px solid grey;
border-radius: 2px;
font-family: sans-serif;

& input{
    border: none;
    outline: none;
    padding: 10px;
    font-size: 15spx;
}

& button{
    border: none;
    outline: none;
    padding: 10px;
    font-size: 15spx;
    background-color: black;
    color: white;
    cursor: pointer;
    
}
`


const CityComponent = (props) => {

    const { setCity , FetchWeather} = props;

    return (
        <>
            <WeatherLogo src="https://fixmywp.com/wp-content/uploads/2014/06/cloud-computing-wifi-concept-xs-1280x720.jpg" />
            

            <ChooseCityLable>
                Find Weather of Your City
            </ChooseCityLable>

            <SearchBox onSubmit={FetchWeather}>
                <input type="text" placeholder="Enter Your City Name"
                onChange={(e)=>setCity(e.target.value)}
                />
                <button type="submit">SEARCH</button>
            </SearchBox>


        </>
    )
}

export default CityComponent


