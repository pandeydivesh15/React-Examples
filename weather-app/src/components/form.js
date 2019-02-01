import React from 'react';

export const Form = (props) =>{
	return (
		<form onSubmit={props.loadWeather}>
			<input type="text" name="city" placeholder="Enter city name!"/>
			<input type="text" name="country" placeholder="Enter country name!"/>
			<button>Get weather</button>
		</form>
	)
}

export default Form;