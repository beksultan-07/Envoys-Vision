import React, { useState } from 'react'
import FarmsListTop from './FarmsListTop'
import icon1 from '../assets/usdc1.svg'
import icon2 from '../assets/usdc2.svg'
import FarmsListItems from './FarmsListItems'

export default function FarmsList() {
    const [state, setState] = useState([
        {
            name: ['ETH','USDC'],
            img: [icon1, icon2],
            percent: '0.3%',
            earned: 0,
            APR: '37.2',
            liqudity: '$749 614 538',
            multiplier: '40x'
        },
        {
            name: ['ETH','USDC'],
            img: [icon1, icon2],
            percent: '0.3%',
            earned: 0,
            APR: '37.2',
            liqudity: '$749 614 538',
            multiplier: '40x'
        },
        {
            name: ['ETH','USDC'],
            img: [icon1, icon2],
            percent: '0.3%',
            earned: 0,
            APR: '37.2',
            liqudity: '$749 614 538',
            multiplier: '40x'
        },
        {
            name: ['ETH','USDC'],
            img: [icon1, icon2],
            percent: '0.3%',
            earned: 0,
            APR: '37.2',
            liqudity: '$749 614 538',
            multiplier: '40x'
        },
        {
            name: ['ETH','USDC'],
            img: [icon1, icon2],
            percent: '0.3%',
            earned: 0,
            APR: '37.2',
            liqudity: '$749 614 538',
            multiplier: '40x'
        },
        {
            name: ['ETH','USDC'],
            img: [icon1, icon2],
            percent: '0.3%',
            earned: 0,
            APR: '37.2',
            liqudity: '$749 614 538',
            multiplier: '40x',
        },
    ])
    return (
        <div className='farmsList'>
            <FarmsListTop/>
            <ul className="farmsList__list">
                {state.map((item, index) => {
                    return (
                        <FarmsListItems 
                            name={item.name}
                            img={item.img}
                            percent={item.percent}
                            earned={item.earned}
                            APR={item.APR}
                            liqudity={item.liqudity}
                            multiplier={item.multiplier}
                            key={index}/>
                    )
                })}
            </ul>
        </div>
    )
}
