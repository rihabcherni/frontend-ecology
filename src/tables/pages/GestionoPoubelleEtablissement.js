import React from 'react'

import ZoneTravail from '../ag table/gestionPoubelleEtablissement/ZoneTravail/ZoneTravail'
import Etablissement from '../ag table/gestionPoubelleEtablissement/Etablissement/Etablissement'
import BlocPoubelle from '../ag table/gestionPoubelleEtablissement/BlocPoubelle/BlocPoubelle'
import CommandePoubelle from '../ag table/gestionPoubelleEtablissement/CommandePoubelle/CommandePoubelle'
import Poubelle from '../ag table/gestionPoubelleEtablissement/Poubelle/Poubelle'
import DetailCommandePoubelle from '../ag table/gestionPoubelleEtablissement/DetailCommandePoubelle/DetailCommandePoubelle'

export default function GestionoPoubelleEtablissement() {
  return (
    <div>  
    <h1 align="center"  className='color'>gestion des poubelle</h1>
        <ZoneTravail/>
        <Etablissement/>
        <BlocPoubelle/>
        <Poubelle/>
        <CommandePoubelle/>
        <DetailCommandePoubelle/>
    </div>
  )
}
