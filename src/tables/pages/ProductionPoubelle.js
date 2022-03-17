import React from 'react'
import Fournisseur from '../ag table/productionPoubelle/Fournisseur/Fournisseur'
import MateriauxPrimaires from '../ag table/productionPoubelle/MateriauxPrimaire/MateriauxPrimaires'
import StockPoubelle from '../ag table/productionPoubelle/StockPoubelle/StockPoubelle'
export default function ProductionPoubelle() {
  return (
<div>
    <h1 align="center" className='color'>Production Poubelle</h1>
          <Fournisseur/>
          <MateriauxPrimaires/>
          <StockPoubelle/>
</div>
  )
}
