import React from 'react';
import Title from "./components/title";
import Weather from "./components/weather";
import Form from "./components/form";
import {connect} from "react-redux";

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="row">
                            <div className="col-xs-5 title-container">
                                <Title />
                            </div>
                            <div className="col-xs-7 form-container">
                                <Form />
                                <Weather />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
)(App);