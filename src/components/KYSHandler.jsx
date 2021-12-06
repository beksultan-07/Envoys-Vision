import React, { useState } from 'react'
import icon from '../assets/upload.svg'
import pasp from '../assets/pasport.png'


export default function KYSHandler() {
    const [inputValues, setInputValues] = useState({
        country: '',
        name: '',
        typeOfID: '',
        typeOfID: '',
        IDNum: '',
        frontSide: '',
        backSide: '',
        confirmP: '',
    })


    function changeInpVal(e){
        let newInpVal = inputValues
        newInpVal[e.target.name] = e.target.value
        setInputValues(newInpVal)
    }
    
    function submitForm(e){
        let count = 0
        for (let i in inputValues){
            if (inputValues[i] !== '') {
                count++
            }
        }
        if (count === Object.keys(inputValues).length){
            alert('запрос отправлен')
            window.location.reload();
        }else alert('вы чтото пропустили')
        console.log(inputValues.frontSide);
    }

    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    return (
        <div className='KYSHandler'>
            <h3 className="KYSHandler__title">Enter basic information</h3>
            <form action="#" >
                <div className='KYSHandler__form__top'>
                    <input 
                        type="text" 
                        name='country'
                        placeholder='Country' 
                        onChange={(e) => changeInpVal(e)}
                        className='KYSHandler__inp'/>
                    <input 
                        type="text" 
                        name='name'
                        placeholder='Full name'
                        onChange={(e) => changeInpVal(e)}
                        className='KYSHandler__inp'/>
                    <input
                        type="text" 
                        name='typeOfID'
                        placeholder='Type of ID'
                        onChange={(e) => changeInpVal(e)}
                        className='KYSHandler__inp'/>
                    <input 
                        type="text" 
                        name='IDNum'
                        placeholder='Enter your number ID'
                        onChange={(e) => changeInpVal(e)}
                        className='KYSHandler__inp'/>
                    <label className="KYSHandler__inp">
                        <input type="file" name='frontSide' onChange={(e) => changeInpVal(e)}/>
                        <div className='KYSHandler__inp__pos'>
                            <span className='KYSHandler__inp__text'>Upload Front side card photo</span>
                            <span className='KYSHandler__inp__icon'>
                                <img src={pasp} alt="" className='KYSHandler__inp__img'/>

                                {/* {inputValues.frontSide === ''?
                                <img src={icon} alt="" className='KYSHandler__inp__img'/>:
                                <img src={inputValues.frontSide} alt="" className='KYSHandler__inp__img'/>
                                }            */}
                            </span>
                        </div>
                    </label>
                    <label className="KYSHandler__inp">
                        <input type="file" name='backSide' onChange={(e) => changeInpVal(e)}/>
                        <div className='KYSHandler__inp__pos'>
                            <span className='KYSHandler__inp__text'>Upload Back side card photo</span>
                            <span className='KYSHandler__inp__icon'>
                                {inputValues.backSide === ''?
                                    <img src={icon} alt="" className='KYSHandler__inp__img'/>:
                                    <img src={inputValues.backSide} alt="" className='KYSHandler__inp__img'/>
                                }  
                            </span>
                        </div>
                    </label>
                </div>
                

                <div className="KYSHandler__confirm">
                    <h3 className="KYSHandler__title">Confirm basic information</h3>

                    <div className='KYSHandler__confirm__btns'>
                        <span className="KYSHandler__inp KYSHandler__confirm__num">You ID Envoys Vision:  <span>{getRandomNum(1000000, 9999999)}</span></span>
                        <label className="KYSHandler__inp">
                            <input type="file"  name='confirmP' onChange={(e) => changeInpVal(e)}/>
                            <div className='KYSHandler__inp__pos'>
                                <span className='KYSHandler__inp__text'>Passport self holding</span>
                                <span className='KYSHandler__inp__icon'>
                                    {inputValues.confirmP === ''?
                                        <img src={icon} alt="" className='KYSHandler__inp__img'/>:
                                        <img src={inputValues.confirmP} alt="" className='KYSHandler__inp__img'/>
                                    }                                  </span>
                            </div>
                        </label>
                    </div>
                </div>

                <p className="KYSHandler__text">
                    The image file format must be jpg or png, the file size cannot exceed 4 MB. The face must be clearly visible! The note must be clearly legible! The passport must be clearly legible 3. Please upload photos of materials in strict accordance with the requirements, otherwise your certification will not pass the audit, save your precious time!
                </p>
                
                <input 
                    type="button" 
                    className='KYSHandler__inp'
                    onClick={(e) => submitForm(e)}
                    value='Confirm and send'/>
            </form>
        </div>
    )
}
