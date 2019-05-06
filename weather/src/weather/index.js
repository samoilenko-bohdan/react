import React from "react"

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city  && <p className="weather__key"> Location:
                        <span className="weather__value"> {this.props.city}</span>
                    </p>
                }
                {
                    this.props.temperature && <p className="weather__key"> Temperature:
                        <span className="weather__value"> {this.props.temperature} ℃</span>
                    </p>
                }
                {
                    this.props.temperatureMin && <p className="weather__key"> Minimum temperature:
                        <span className="weather__value"> {this.props.temperatureMin} ℃</span>
                    </p>
                }
                {
                    this.props.temperatureMax && <p className="weather__key"> Maximum temperature:
                        <span className="weather__value"> {this.props.temperatureMax} ℃</span>
                    </p>
                }
                {
                    (this.props.clouds || this.props.clouds === 0) &&  <p className="weather__key"> Clouds:
                        <span className="weather__value"> {this.props.clouds} %</span>
                    </p>
                }
                {
                    this.props.windSpeed && <p className="weather__key"> Wind speed:
                        <span className="weather__value"> {this.props.windSpeed} m/s</span>
                    </p>
                }
                {
                    this.props.pressure && <p className="weather__key"> Pressure:
                        <span className="weather__value"> {this.props.pressure}	hpa</span>
                    </p>
                }
                {
                    this.props.humidity && <p className="weather__key"> Humidity:
                        <span className="weather__value"> {this.props.humidity} %</span>
                    </p>
                }
                {
                    this.props.description && <p className="weather__key"> Conditions:
                        <span className="weather__value"> {this.props.description} </span>
                    </p>
                }
                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
            </div>
        );
    }
}

export default Weather;