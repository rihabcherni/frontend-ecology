import React from 'react'
import CommandeDechet from '../ag table/gestionDechets/CommandeDechet/CommandeDechet'
import DetailCommandeDechet from '../ag table/gestionDechets/DetailCommandeDechet/DetailCommandeDechet'
import Dechets from '../ag table/gestionDechets/Dechet/Dechets'

export default function GestionDechet() {
  return (
    <div>
          <h1 align="center"  className='color'>gestion des déchets</h1>
                <Dechets/>
                <CommandeDechet/>
                <DetailCommandeDechet/>
    </div>
  )
}
