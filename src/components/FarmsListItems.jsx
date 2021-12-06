import React, { useState } from 'react'
import dwn from '../assets/dropdown_dwn.svg'
import up from '../assets/dropdown_up.svg'


export default function FarmsListItems(props) {
    const [dropDown, setDropDown] = useState(false)

    return (
        <li className={`farmsList__item ${dropDown?'farmsList__item-active':''}`} onClick={() => setDropDown(!dropDown)}>
            <div className='farmsList__item__top'>
                <div className="farmsList__item__start">
                    <div className='farmsList__item__imgs'>
                        {props.img.map((item, index) => {
                            if (props.name[index+1] === undefined) {
                                return (
                                    <img src={item} alt="" className='farmsList__item__icon' key={index} style={{marginLeft: '-8px'}}/>
                                )
                            }
                            return <img src={item} alt="" className='farmsList__item__icon' key={index}/>
    
                        })}
                    </div>
                    <h4 className="farmsList__item__name">{props.name.map((item,index) => {
                        if (props.name[index+1] !== undefined) {
                            return item + '/'
                        }
                        return item
                    })}</h4>
    
                    <p className="farmsList__item__percent">{props.percent}</p>
                </div>
                
                <div className="farmsList__item__end">
                    <div className='farmsList__item__options'>
                        <p className="farmsList__item__title">Eanred</p>
                        <p className="farmsList__item__option">{props.earned}</p>
                    </div>
                    <div className='farmsList__item__options'>
                        <p className="farmsList__item__title">APR</p>
                        <p className="farmsList__item__option">{props.APR}</p>
                    </div>
                    <div className='farmsList__item__options'>
                        <p className="farmsList__item__title">liqudity</p>
                        <p className="farmsList__item__option">{props.liqudity}</p>
                    </div>
                    <div className='farmsList__item__options'>
                        <p className="farmsList__item__title">multiplier</p>
                        <p className="farmsList__item__option">{props.multiplier}</p>
                    </div>
                </div>
    
                <img src={dropDown?up:dwn} alt="" className='farmsList__item__dropDown'/>
            </div>
            
            <div className="farmsList__item__down" onClick={(e) => e.stopPropagation()}>
                <div className="farmsList__item__down__start">
                    <a href="#" className="farmsList__item__down__link">Get ETH-USDC</a>
                    <a href="#" className="farmsList__item__down__link">View Contract</a>
                    <a href="#" className="farmsList__item__down__link">See Pair Info</a>
                </div>
                <div className='farmsList__item__options'>
                    <p className="farmsList__item__title"><a href='#'>ETH</a> EARNED</p>
                    <p className="farmsList__item__option">{props.earned}</p>
                </div>

                <div className="farmsList__item__down__btns">
                    <button className='farmsList__item__down__btn disablade'>Harvest</button>
                    <button className='farmsList__item__down__btn'>Start Farming</button>
                </div>

            </div>

        </li>
    )
}
