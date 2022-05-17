import React, { Component } from 'react';
import Carousel, {CarouselItem} from './Carousel';
import img1 from './images/SVENS.png'
import img2 from './images/ANDELSSVART.jpg'
import img3 from './images/AS.jpg'
import img4 from './images/BAR2018.png'
import img5 from './images/elitl.jpg'


class Media extends Component {
    render() {
        return (
            <div className="mediapage">
             <p className="kop">MEDIA</p>

             <div className='Media'>
                 <Carousel>
                     <CarouselItem><img src={img1}></img></CarouselItem>
                     <CarouselItem><img src={img2}></img></CarouselItem>
                     <CarouselItem><img src={img3}></img></CarouselItem>
                     <CarouselItem><img src={img4}></img></CarouselItem>
                     <CarouselItem><img src={img5}></img></CarouselItem>
                     <CarouselItem> Item 6</CarouselItem>
                     <CarouselItem>Item 7</CarouselItem>
                     <CarouselItem>Item 8</CarouselItem>
                 </Carousel>
             </div>






            </div>
            
            )
        }
    }
    
export default Media
    