import * as React from 'react';
import Carousel, { ICarouselAPI } from './Carousel';
import carouselData, { IImage } from './data/carousel';
import styled from 'react-emotion';

const Img = styled('img')({
  height: 100,
  width: 300
});

const StyledSlides = styled('div')({
  display: 'flex',
  width: 500,
  alignItems: 'center'
});

const CarouselWrapper = styled('div')({
  width: 300,
  overflow: 'hidden',
  display: 'flex'
});

function Slide({ slide: { caption, title, url } }: IImage) {
  return (
    <figure>
      <Img src={url} alt={title} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// function Slides(props: any) {
//   return props.slides.map((slideProps: IImage, i: number) => (
//     <Slide key={i + slideProps.url} {...slideProps} />
//   ));
// }

const StyledButton = styled('button')({
  borderRadius: '100%',
  border: '2px solid #ccc',
  background: '#fff',
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.15)',
  fontSize: 20,
  height: 40,
  width: 40
});

function Button(props: any) {
  return <StyledButton type="button" {...props} />;
}

class ImageCarousel extends React.PureComponent {
  render() {
    return (
      <Carousel size={carouselData.length} loop>
        {({
          currentIndex,
          nextSlide,
          setCurrentIndex,
          prevSlide
        }: ICarouselAPI) => (
          <React.Fragment>
            <StyledSlides>
              <Button onClick={prevSlide}>🔙</Button>
              <CarouselWrapper>
                <Slide slide={carouselData[currentIndex]} />
              </CarouselWrapper>
              <Button onClick={nextSlide}>➫</Button>
            </StyledSlides>
            {currentIndex}
          </React.Fragment>
        )}
      </Carousel>
    );
  }
}

export default ImageCarousel;
