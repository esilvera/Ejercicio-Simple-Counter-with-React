import React from "react";
import PropType from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="reloj">
				<i className="far fa-clock"></i>
			</div>
			<div className="box miles">{props.miles}</div>
			<div className="box centena">{props.centena}</div>
			<div className="box decena">{props.decena}</div>
			<div className="box unidad">{props.unidad}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	miles: PropType.number,
	centena: PropType.number,
	decena: PropType.number,
	unidad: PropType.number
};
