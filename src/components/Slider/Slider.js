
import Slides from "../../data/naaPhoto.json"

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel  style={{height:"100%"}}>
               {Slides.map((item,index)=>(
      <div key={index} style={{height:"100%",backgroundColor:"black"}}>
      <img src={item.url} className="slider-img" alt={item.alt} />
      </div>          
                ))} 
            </Carousel>
        );
    }
};
