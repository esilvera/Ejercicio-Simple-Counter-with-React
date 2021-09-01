//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include Awesome library into the bundle
import "@fortawesome/fontawesome-free/css/all.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
/* import Home from "./component/home.jsx"; */

import { SecondsCounter } from "./component/seconds";

let unidad = 0;
let decena = 0;
let centena = 0;
let miles = 0;

setInterval(function() {
	unidad = unidad + 1;
	if (unidad === 10) {
		decena++;
		unidad = 0;
	}
	if (decena === 10) {
		centena++;
		decena = 0;
	}
	if (centena === 10) {
		miles++;
		centena = 0;
	}
	ReactDOM.render(
		<SecondsCounter
			unidad={unidad}
			decena={decena}
			centena={centena}
			miles={miles}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
