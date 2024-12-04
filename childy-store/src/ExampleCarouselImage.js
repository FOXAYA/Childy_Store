import React, { Component } from "react";
import pic_1 from './imgs/sec-pic-1.jpg';
import pic_2 from './imgs/sec-pic-2.jpg';



export default class ExampleCarouselImage extends Component{
    render (){
        return (
        <div>
        <img src={pic_1} alt="Logo_Image" className="carsaul" />        
        <img src={pic_2} alt="Logo_Image" className="carsaul" />   
     
        </div>
        );
    }
}
