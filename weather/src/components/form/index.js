import React from "react"
import {connect} from "react-redux";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onGetWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onGetWeather: async (e) => {
            e.preventDefault();
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const apiCall = await fetch(
                `http://localhost:8181/cxf/weather/city/${city},${country}`);
            const data = await apiCall.json();
            console.log(data);
            if (data.cod !== "404") {
                dispatch({type: "SET_WEATHER", data: data})
            } else {
                dispatch({type: "SET_ERROR"})
            }
        }
    })
)(Form);