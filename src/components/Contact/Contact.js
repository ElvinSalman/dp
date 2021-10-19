import React, { Component } from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./Contact.css";
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

 const Contact=()=> {

  const { t, i18n } = useTranslation(['contact']);

        return (
        
<>
<Breadcrumb title={t('title')}>
        <BreadcrumbItem name={t('home')} href="/" />
        <BreadcrumbItem name={t('title')} current />
</Breadcrumb>

<div className="container list-group" style={{marginTop:50,marginBottom:60}}>
                <div className="row d-flex justify-content-center" style={{marginBottom:30}}>
<div className="col-12 col-md-12 text-center">
<img src="https://fb.ru/misc/i/y/1/3/6/2/2/13622.jpg" width="90%" height="80%" alt="bdu" />
</div>
<div className="col-12 col-md-4 text-center">
<i className="fas fa-phone-alt" style={{marginRight:15,fontSize:20}}></i>
<a href={'tel:' + "+994124972628"} style={{textDecoration: 'none', color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>(+994 12)539 05 17</a>              
</div>
<div className="col-12 col-md-4 text-center">
<i className="fas fa-envelope" style={{marginRight:15,fontSize:20}}></i>
<a href={'mailto:' + "mail@naa.edu.az"} style={{textDecoration: 'none', color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>info@bsu.edu.az</a>                
</div>
<div className="col-12 col-md-4 text-center">
<i className="fas fa-map-marker-alt" style={{marginRight:15,fontSize:20}}></i>
<span style={{color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>
{t('adres')}
</span>
</div>
<div style={{marginTop:50,marginBottom:50,position:"relative",height:400}} className="col-12 col-md-12 map text-center">
<iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5474446809235!2d49.809276414893326!3d40.37455796612805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2zQmFrxLEgRMO2dmzJmXQgVW5pdmVyc2l0ZXRp!5e0!3m2!1sen!2s!4v1634634967034!5m2!1sen!2s"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
            />
</div>
</div>
</div>

</>
        
        )
    
}

export default Contact;
