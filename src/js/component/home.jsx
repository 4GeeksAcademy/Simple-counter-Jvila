import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Counter } from "./Counter.jsx";

//create your first component
const Home = () => {
	return (
		<div style={{
				
			backgroundColor: "rgba(248, 63, 21, 0.93)", // Fondo amarillo con opacidad
		}}>
			<div>
				<h1 className="text-center mt-5  ">SIMPLE COUNTER </h1>
			</div>
			
			<div>
				<Counter />
			</div>
			<div>
				<h1 className="text-center mt-5" style={{
				
				backgroundColor: "rgba(248, 63, 21, 0.93)", // Fondo amarillo con opacidad
			}}>Jvila</h1>
			</div>
		</div>
	);
};

export default Home;
