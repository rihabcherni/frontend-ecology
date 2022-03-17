import React from 'react'
import Camions from '../ag table/transportDechet/Camion/Camions'
import ZoneDepots from '../ag table/transportDechet/ZoneDepot/ZoneDepots'
import Depot from '../ag table/transportDechet/Depot/Depot'
export default function PageTransportDechet() {
  return (
    <div>
        <h1 align="center" className='color'>transport de déchets</h1>
              <ZoneDepots/>
              <Depot/>
              <Camions/>
    </div>
  )
}
