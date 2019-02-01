import React from 'react';
import { Titles } from "./components/titles.js";
import { Form } from "./components/form.js";
import { Weather } from "./components/weather.js";

class App extends React.Component {
  constructor(props){
    super(props)

    // Setting API
    this.api_end_point = 'http://api.openweathermap.org'
    // Setting the OpenWeather API key
    this.api_key = '<add your key here>';

    //Setting state
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      desc: undefined,
      error: undefined,
    }
  }

  getWeather = async(e) => {
  	e.preventDefault();
  	
  	const city = e.target.elements.city.value;
  	const country = e.target.elements.country.value;
  	const end_point = `${this.api_end_point}/data/2.5/weather?q=${city},${country}&appid=${this.api_key}`;
  	// console.log(end_point);
  	const api_call = await fetch(end_point);

  	const response = await api_call.json();

  	// console.log(api_call.status);
    // Set state
    if (city && country) {
      if(api_call.ok){
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          desc: response.weather[0].description,
          error: "",
        }) 
      }
      else{
        this.setState({
          city: undefined,
          error: response.message,
        })
      }
    }
    else{
      this.setState({
        city: undefined,
        error: "Please enter values...",
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-8">
                    <Titles />
                    <Form loadWeather={this.getWeather}/>
                    <Weather 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      desc={this.state.desc}
                      error={this.state.error}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
    )
  }
}

export default App;