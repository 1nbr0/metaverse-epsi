//import logo from './logo.svg';
//import './App.css';
import "aframe";
import { Scene, Entity } from "aframe-react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import stormtrooper from "./models/stormtrooper_dancing.glb";
import kamino from "./models/kamino.jpg";

const App = () => {
	const loader = new GLTFLoader();
	loader.load(stormtrooper, (d) => {
		const entity = document.getElementById("landscape");

		entity.object3D.add(d.scene);
	});
	return (
		<div>
			<Scene>
				<Entity primitive="a-assets">
					<img id="sky" src={kamino} alt="stars" />
				</Entity>
				<Entity
					id="landscape"
					position={{ x: 0, y: 0, z: 0 }}
					scale="0.2 0.2 0.2"
				></Entity>
				<Entity
					primitive="a-sky"
					color="FFFFFF"
					material="src:#sky"
					rotation={{ x: 0, y: 0, z: 0 }}
				/>
			</Scene>
		</div>
	);
};

export default App;
