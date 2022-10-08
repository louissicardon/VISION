import { Fade } from 'react-slideshow-image';

import styles from './slider.module.scss';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'images/gvms/image1.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/gvms/image2.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/gvms/image3.jpg',
    caption: 'Slide 3'
  },
];

export const Slider = ({}) => {
  return (
    <div className="slide-container">
      <Fade className={styles.slider}>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))} 
      </Fade>
    </div>
  )
}

export default Slider;