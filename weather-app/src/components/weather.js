import React from 'react';

export const Weather = (props) =>{
	return (
		<div>
			{props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
			{props.city && props.temperature && <p>Temperature: {props.temperature}</p>}
			{props.city && props.humidity && <p>Humidity: {props.humidity}</p>}
			{props.city && props.desc && <p>Notes: {props.desc}</p>}
			{props.error && <p>ERROR: {props.error}</p>}
		</div>
	)
}

export default Weather;