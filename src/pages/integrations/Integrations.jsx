import './integrations.css'

// Necesario para colocar la data del json en un valor
// que pueda ser usaro en la página
import { useEffect, useState } from 'react'

import Integration from '../../components/integration/Integration'

//El json con todas las integraciones
import json from './integrations.json'


const Integrations = () => {
    return (
        <div id="main-integrations">
            <div id="container-integrations">
                {
                    json.map(i => (
                        <Integration key={i.name} title={i.name} links={i.links} images={i.pictures} />                        
                    ))
                }
            </div>
        </div>
    )
}

export default Integrations
