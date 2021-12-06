import React, { useState } from 'react'
import Img1 from '../assets/view_list1.svg'
import Img2 from '../assets/view_list2.svg'
import Img1A from '../assets/view_list1-active.svg'
import Img2A from '../assets/view_list2-active.svg'


export default function FarmsListTop() {
    const [sortList, setSortList] = useState(true)
    const [farmsListSwitcher, setFarmsListSwitcher] = useState(false)

    return (
        <div className="farmsList__top">
                <div className="formlist__titleLink">
                    <h3 className="KYSHandler__title">Stake LP tokens to earn</h3>
                    <a href="#" className="farmList__title__link">Community Auctions →</a>
                </div>

                <div className="farmList__sort">
                    <img 
                        className='farmList__icon' 
                        onClick={() => setSortList(true)}
                        src={sortList?Img1A:Img1} 
                        alt="" />
                    <img 
                        className='farmList__icon' 
                        onClick={() => setSortList(false)}
                        src={!sortList?Img2A:Img2} 
                        alt="" />
                </div>

                <div className="farmsList__switcher__wrap">
                    <div 
                        className={`farmsList__switcher ${!farmsListSwitcher?'':'farmsList__switcher-active'}`}>
                            <button
                                onClick={() => setFarmsListSwitcher(!farmsListSwitcher)}            
                                className="farmsList__switcher__circle"></button>
                    </div>
                        <p className="simple__text">Stake only</p>
                </div>

                <div className="farmList__live__wrap">
                    <span className='farmList__live__text'>Live</span>
                    <button className='farmList__live__btn'>Finished</button>
                </div>

                <div className="farmList__sort__by">
                    <p>Sort by: </p>
                    <select className='farmList__sort__select'>
                        <option value="A">Hot</option>
                        <option value="B">Hot1</option>
                        <option value="C">Hot2</option>
                    </select>
                </div>

            </div>
    )
}
