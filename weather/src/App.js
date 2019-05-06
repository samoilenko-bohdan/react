import React from 'react';
import Title from "./title";
import Weather from "./weather";
import Form from "./form";

class App extends React.Component {

    state = {
        temperature: undefined,
        temperatureMin: undefined,
        temperatureMax: undefined,
        clouds: undefined,
        windSpeed: undefined,
        pressure: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch(
                `http://localhost:8181/cxf/weather/city/${city},${country}`);
        const data = await apiCall.json();
        console.log(data);
        if (city && country) {
            this.setState({
                temperature: data.temp,
                temperatureMin: data.minTemp,
                temperatureMax: data.maxTemp,
                clouds: data.clouds,
                windSpeed: data.windSpeed,
                pressure: data.pressure,
                city: data.cityName,
                humidity: data.humidity,
                description: data.description,
                error: undefined
            });
        } else {
            this.setState({
                temperature: undefined,
                temperatureMin: undefined,
                temperatureMax: undefined,
                clouds: undefined,
                windSpeed: undefined,
                pressure: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "The city is not found. Please enter the values or change city name",
            });
        }
    };

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div>
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Title/>
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        temperatureMin={this.state.temperatureMin}
                                        temperatureMax={this.state.temperatureMax}
                                        clouds={this.state.clouds}
                                        windSpeed={this.state.windSpeed}
                                        pressure={this.state.pressure}
                                        humidity={this.state.humidity}
                                        city={this.state.city}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;