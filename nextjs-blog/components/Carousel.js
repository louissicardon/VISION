import Slider from "react-slick";

import styles from './carousel.module.scss';

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

const sliderSettings = {
  // infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // initialSlide: 0,
  // centerMode: false,
  // centerPadding: '0px',
  // draggable: true,
  // autoplaySpeed: 3000,
  // speed: 1000,
  // rows: 1
}

export const Carousel = ({ sliderList }) => {
  return (
    <Slider {...sliderSettings}>
      <div className={styles.container}>
        {slideImages.map((img, key) => (
          <div key={key}>
            <picture>

            <img src={img.url} width={450} height={300}/>
            </picture>
          </div>
        ))}
      </div>
    </Slider>
  )
}

export default Carousel;