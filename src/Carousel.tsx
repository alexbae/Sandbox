import * as React from "react";

export interface ICarousel {
  children: (props: any) => any;
  initialIndex?: number;
  size: number;
  loop?: boolean;
}

export interface ICarouselState {
  currentIndex: number;
}

export interface ICarouselAPI extends ICarouselState {
  setCurrentIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

class Carousel extends React.PureComponent<ICarousel, ICarouselState> {
  state = {
    currentIndex: this.props.initialIndex || 0
  };

  setCurrentIndex = (index: number) => {
    this.setState({
      currentIndex: index
    });
  };

  nextSlide = () => {
    const { currentIndex } = this.state;
    const { size, loop } = this.props;

    if (currentIndex >= size) {
      if (loop) {
        this.setCurrentIndex(0);
      }
    } else {
      this.setCurrentIndex(currentIndex + 1);
    }
  };

  prevSlide = () => {
    const { currentIndex } = this.state;
    const { size, loop } = this.props;

    if (currentIndex <= 0) {
      if (loop) {
        this.setCurrentIndex(size - 1);
      }
    } else {
      this.setCurrentIndex(currentIndex - 1);
    }
  };

  get carouselProps() {
    return {
      nextSlide: this.nextSlide,
      prevSlide: this.prevSlide,
      setCurrentIndex: this.setCurrentIndex
    };
  }

  render() {
    return this.props.children({
      ...this.state,
      ...this.carouselProps
    });
  }
}

export default Carousel;
