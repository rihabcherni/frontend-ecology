import CommandeDechet from '../ag table/gestionDechets/CommandeDechet/CommandeDechet'
import DetailCommandeDechet from '../ag table/gestionDechets/DetailCommandeDechet/DetailCommandeDechet'
import Dechets from '../ag table/gestionDechets/Dechet/Dechets'
import React, { useEffect , useState} from 'react';

export default function GestionDechet() {
  let [QuantiteMois, setQuantiteMois]= useState([]);

  useEffect(() => {
    (async function getQuantiteMois() {
      const res = await fetch('http://127.0.0.1:8000/api/sommeDechetMois');
      const json = await res.json();
      setTimeout(getQuantiteMois, 10000);
      setTimeout(console.log('ran', json),10000);
      setQuantiteMois(json);
    })();
  }, []);

  //setTimeout(console.log(QuantiteMois.annee),155000);

  return (
    <div>
          <h1 align="center"  className='color'>gestion des déchets</h1>
                <Dechets/>
                <CommandeDechet/>
                <DetailCommandeDechet/>
                <p>{QuantiteMois.annee}</p>
    </div>
  )
}
