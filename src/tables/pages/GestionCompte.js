import React from 'react'
import Gestionnaire from '../ag table/GestionCompte/Gestionnaire/Gestionnaire'
import Client from '../ag table/GestionCompte/Client/Client'
import Ouvrier from '../ag table/GestionCompte/Ouvrier/Ouvrier'
import ResponsableEtablissement from '../ag table/GestionCompte/ResponsableEtablissement/ResponsableEtablissement'
import User from '../ag table/GestionCompte/User/User'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function GestionCompte() {
  // const quantitemoisURL = 'http://127.0.0.1:8000/api/sommeDechetMois'
  // const [quantitemois, setQuantiteMois] = useState([])
  // const getQuantiteMois = () => {
  //    axios.get(quantitemoisURL).then((response) => {
  //     setQuantiteMois(response)
  //   }) .catch(error => {
  //     this.setState({ errorMessage: error.message });
  //     console.error('There was an error!', error);
  // });
  // }
  // // useEffect(() => getQuantiteMois(), [])
  //   //    console.log(quantitemois)
  //   //  console.log(quantitemois.data[0])

  // // console.log(quantitemois.data)
  // // for (let i = 0; i < quantitemois.data.length; i++) {
  // //   console.log(quantitemois[i].year)
  // // }
  // const [quantitemois, setQuantiteMois] = useState([])

  // useEffect(() => {
  //   getData()
  // }, [])
  // //fetching user data from server
  // const getData = () => {
  //   fetch('http://127.0.0.1:8000/api/sommeDechetMois').then(resp => resp.json()).then(resp => setQuantiteMois(resp.data))
  // }

  // const [quantitemois, setQuantiteMois] = useState([])
  let [QuantiteMois, setQuantiteMois]= React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": 'http://127.0.0.1:8000/api/sommeDechetMois',
    })
    .then((response) => {
      setQuantiteMois(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
  var year=[];
  var months = [];
  for(let i=0; i<QuantiteMois.length;i++){
    if(year.indexOf(QuantiteMois[i].year) === -1){
      year.push(QuantiteMois[i].year);
  }   
  }
  console.log(year)
  var mat=[];
  for(let i =0 ; i<QuantiteMois.length; i++){
    var plastique=[];
    var papier=[];
    var composte=[];
    var canttte=[];
    for(let j =0 ; j<year.length; j++){
      if(months.indexOf(QuantiteMois[i].month) === -1){
        composte.push(QuantiteMois[i].quantite_depose_composte)
      }
      console.log('composte= ',composte)
  
    }
    
  }

  return (
    <div>*
        <Gestionnaire/>
        <Client/>
        <Ouvrier/>
        <ResponsableEtablissement/>
        <User/>


    </div>
  )
}
