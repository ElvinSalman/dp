import React, { Component } from 'react'
import Slider2 from '../Slider/Slider2'
import "./welcome.css"

import { useTranslation } from 'react-i18next';

 const WelcomePage=()=>{
  
  const { t, i18n } = useTranslation(['home']);

    return (
       
        <div className="container" style={{marginBottom:100}}>
            <div className="row">
            <div className="col-12" style={{textAlign:"center",margin:"30px 0"}}>
              <h2>{t('title')} </h2>
            </div>
                <div className="col-12 d-flex justify-content-center" style={{textAlign:"center"}}>
                   <Slider2/>
                </div>
                <div className="col-12">
                <p>{t('content')}</p>
                <div className="col-12 d-flex justify-content-center">
                <img src="http://www.airwar.ru/image/i/engines/tv3-117bma.jpg" alt="photo-1" />
                </div>
                </div>
            </div>
        </div>
            
     
    )

}
export default WelcomePage;
