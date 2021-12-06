import React, { useState } from 'react'
import FarmsList from '../components/FarmsList'
import Pools from '../components/Pools'

export default function Farms() {
    const [settingsHandler, setSettingsHandler] = useState(true)

    return (
        <div className='farms'>
            <div className="container">
                <div className="settingsKYC__wrap">
                    <div className="settingsKYC__top">
                        <button 
                            className={`settingsKYS__handler ${settingsHandler?'settingsKYS__handler-active':''}`}
                            onClick={() => setSettingsHandler(true)}
                        ><span>Farms</span></button>
                        <button 
                            className={`settingsKYS__handler ${!settingsHandler?'settingsKYS__handler-active':''}`}
                            onClick={() => setSettingsHandler(false)}
                        ><span>Pools</span></button>
                    </div>

                    <div className="settingsKYS__handlers">
                        {settingsHandler?<FarmsList/>:<Pools/>}

                    </div>
                </div>
                
            </div>
        </div>
    )
}
