import React from 'react';
import Title from "./title";
import Weather from "./weather";
import Form from "./form";

const API_KEY = "8c284eaf2053d6cc7c76b5052fdc0362";

class App extends React.Component {

    state = {
        temperature: undefined,
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
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await apiCall.json();
        console.log(data);
        if (data.cod !== "404") {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: undefined
            });
        } else {
            this.setState({
                temperature: undefined,
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
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Title/>
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        humidity={this.state.humidity}
                                        city={this.state.city}
                                        country={this.state.country}
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