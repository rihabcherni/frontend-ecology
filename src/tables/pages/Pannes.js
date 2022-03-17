import React from 'react'

import ReparateurPoubelle from '../ag table/gestionPanne/ReparateurPoubelle/ReparateurPoubelle'
import Mecanicien from '../ag table/gestionPanne/Mecanicien/Mecanicien'
import ReparationPoubelle from '../ag table/gestionPanne/ReparationPoubelle/ReparationPoubelle'
import ReparationCamion from '../ag table/gestionPanne/ReparationCamion/ReparationCamion'
			
export default function Pannes() {
  return (
    <div>
    <h1 align="center"  className='color'>gestion des pannes</h1>
            <ReparateurPoubelle/>
            <ReparationPoubelle/>
            <Mecanicien/>
            <ReparationCamion/>
    </div>
  )
}
