import { ShoppingBagOutlined } from '@mui/icons-material'
import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import pb from '../../assets/poubelle_papier.jpg'

const Container = styled.div`
  padding: 25px;
  display: flex;
`
const Produit = styled.div`
  margin: 10px;
  flex: 1;
  min-weidth: 280px;
  height: 350px;
`
const Icon = styled.div``
const Image = styled.div``


function Produits() {
  //let [stockPoubelle, setStockPoubelle]= useState([]);
  const axios = require('axios')

const getStockPoubelle = async () => {
  try {
    return await axios.get('http://127.0.0.1:8000/api/stock-poubelle')
  } catch (error) {
    console.error(error)
  }
}
const countstockPoubelle = async () => {
  const stockPoubelle = await getStockPoubelle()
  if (stockPoubelle.data) {
    console.log(stockPoubelle.data.data)
  }
}
countstockPoubelle()

// useEffect(() => {
//     (async function getStockPoubelle() {
//       const res = await fetch('http://127.0.0.1:8000/api/stock-poubelle');
//       const json = await res.json();
//       if(json !== undefined){
//         setTimeout(getStockPoubelle, 10000); 
//         setStockPoubelle(json);  
//         console.log(json.data); 
//       }
//     })();
//   }, []);

  return (
    <>
   
      <Container>
        <Produit  >
          Poubelle
          <Image src={pb}/>
          <Icon>
            <ShoppingBagOutlined/>
          </Icon>
        </Produit>
      </Container>

      <Container>
        <Produit >
          <Image src={pb}/>
          <Icon>
            <ShoppingBagOutlined/>
          </Icon>
        </Produit>
      </Container>

      <Container>
        <Produit >
          <Image src={pb}/>
          <Icon>
            <ShoppingBagOutlined/>
          </Icon>
        </Produit>
      </Container>

      <Container>
        <Produit >
          <Image src={pb}/>
          <Icon>
            <ShoppingBagOutlined/>
          </Icon>
        </Produit>
      </Container>
    </>
  )
}

export default Produits