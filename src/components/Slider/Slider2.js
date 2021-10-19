import React, { Component } from 'react'
import Slides from "../../data/slider.json"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import "./Slider2.css"

const startupScreen = (
    <div style={{color:"#fff",fontSize:40,backgroundColor:"black"}}>
        Salmanov Elvin
      {/* <img src="/path/to/image-loader.png" /> */}
    </div>
  );

  const slider = (

    <AwesomeSlider
      startupScreen={startupScreen}
      className="slider"
      style={{height:500,width:1000}}
    >

{Slides.map((item,index)=>(
      <div key={index}>
      <img src={item.url} className="slider-img" alt={item.alt} />
      </div>          
                ))}


    </AwesomeSlider>
  );


export default class Slider2 extends Component {
    render() {
        return (
                <>
                {slider}
                </>
        )
    }
}
