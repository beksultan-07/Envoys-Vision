import React, { useState } from 'react'
import BuisnessHandler from '../components/BuisnessHandler'
import KYSHandler from '../components/KYSHandler'

export default function SettingsKYC() {
    const [settingsHandler, setSettingsHandler] = useState(true)

    return (
        <div className='settingsKYC'>
            <div className="container">
                <div className="settingsKYC__wrap">
                    <div className="settingsKYC__top">
                        <button 
                            className={`settingsKYS__handler ${settingsHandler?'settingsKYS__handler-active':''}`}
                            onClick={() => setSettingsHandler(true)}
                        ><span>My KYC</span></button>
                        <button 
                            className={`settingsKYS__handler ${!settingsHandler?'settingsKYS__handler-active':''}`}
                            onClick={() => setSettingsHandler(false)}
                        ><span>Buisness</span></button>
                    </div>

                    <div className="settingsKYS__handlers">
                        {settingsHandler?<KYSHandler/>:<BuisnessHandler/>}

                    </div>
                </div>
            </div>
        </div>
    )
}
