import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionDechet from './tables/pages/GestionDechet'
import GestionoPoubelleEtablissement from './tables/pages/GestionoPoubelleEtablissement'
import PageTransportDechet from './tables/pages/TransportDechet';
import ProductionPoubelle from './tables/pages/ProductionPoubelle';
import Pannes from './tables/pages/Pannes';
import GestionCompte from './tables/pages/GestionCompte';
import Login from './components/Login';
import Produits from './components/responsable/Produits';
import Smart from './tables/smartgrid/Smart';
function App() {
	/*const componentDidMoun=()=> {
		this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
	  }
	const componentWillUnmount=()=>{
		clearInterval(this.interval);
	  }*/
return (
	<div >
	<Router>
			<Navbar />
				<Routes>
				<Route exact path='/smart' element={<Smart/>}></Route>	
				<Route exact path='/gestion-compte' element={<GestionCompte/>}></Route>	
				<Route exact path='/gestion-dechets' element={<GestionDechet/>}></Route>									
					<Route exact path='/gestion-pannes' element={<Pannes/>}></Route>									
					<Route exact path='/gestion-poubelle-etablissement' element={<GestionoPoubelleEtablissement/>}></Route>				
					<Route exact path='/production-poubelle' element={<ProductionPoubelle/>}></Route>				
					<Route exact path='/transport-dechets' element={<PageTransportDechet/>}></Route>			
					<Route exact path='/produits' element={<Produits/>}></Route>			
				</Routes>
	   </Router>
		
	</div>

);
}

export default App;
