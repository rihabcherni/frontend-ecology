import React from 'react'
import Gestionnaire from '../ag table/GestionCompte/Gestionnaire/Gestionnaire'
import Client from '../ag table/GestionCompte/Client/Client'
import Ouvrier from '../ag table/GestionCompte/Ouvrier/Ouvrier'
import ResponsableEtablissement from '../ag table/GestionCompte/ResponsableEtablissement/ResponsableEtablissement'
import User from '../ag table/GestionCompte/User/User'

export default function GestionCompte() {
  return (
    <div>
        <Gestionnaire/>
        <Client/>
        <Ouvrier/>
        <ResponsableEtablissement/>
        <User/>
    </div>
  )
}
