import React, { Component } from 'react';
import Carousel, {CarouselItem} from './Carousel';


class Media extends Component {
    render() {
        return (
            <div className="mediapage">
             <p className="kop">Köp andelar</p>

             <div className='Media'>
                 <Carousel>
                     <CarouselItem>Item 1</CarouselItem>
                     <CarouselItem>item 2</CarouselItem>
                     <CarouselItem>item 3</CarouselItem>
                     <CarouselItem>Item 4</CarouselItem>
                     <CarouselItem> Item 5</CarouselItem>
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
    