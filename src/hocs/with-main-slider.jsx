import React from 'react';

const withMainSlider = (Component) => {
  class WithMainSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeSlide: 1,
      }

      this.onCarouselActive = this.onCarouselActive.bind(this);
      this.onSwipeStart = this.onSwipeStart.bind(this);
      this.swipeAction = this.swipeAction.bind(this);
      this.swipeEnd = this.swipeEnd.bind(this);
    }

    componentDidMount() {
      this.onCarouselActive();
    }

    onCarouselActive() {
      this.carouselInterval = setInterval(() => {
        this.setState({activeSlide: this.state.activeSlide === 3 ? 1 : this.state.activeSlide + 1})
      }, 4000);
    }

    onSwipeStart(evt) {
      if (window.innerWidth >= 1024) {
        return;
      }

      clearInterval(this.carouselInterval);

      this.evt = evt.type === `touchstart` ? evt.touches[0] : evt;

      this.initPosX = this.evt.clientX;

      this.slider = evt.currentTarget;
      this.width = this.slider.clientWidth;
      this.startCoords = this.slider.style.left;

      this.slider.style.transition = `none`;

      document.addEventListener('mousemove', this.swipeAction);
      document.addEventListener('touchmove', this.swipeAction);
      document.addEventListener('mouseup', this.swipeEnd);
      document.addEventListener('touchend', this.swipeEnd);
    }

    swipeAction(evt) {
      this.currentPosX = this.evt.clientX;

      this.posX = this.initPosX - this.currentPosX;
      this.leftCoord = this.posX - this.width * (this.state.activeSlide - 1);

      if (this.leftCoord > 0) {
        this.leftCoord = 0;
      }

      if (this.leftCoord < this.width * -2) {
        this.leftCoord = this.width * -2;
      }

      this.slider.style.left = this.leftCoord + `px`;

      this.initPosX = evt.type === `touchmove` ? evt.touches[0].clientX : evt.clientX;
    }

    swipeEnd() {
      document.removeEventListener('mousemove', this.swipeAction);
      document.removeEventListener('touchmove', this.swipeAction);
      document.removeEventListener('mouseup', this.swipeEnd);
      document.removeEventListener('touchend', this.swipeEnd);

      this.slider.style.transition = `left 0.5s`;

      if (this.posX * -1 / this.width > 0.5) {
        this.setState({
          activeSlide: this.state.activeSlide === 3 ? 3 : this.state.activeSlide + 1
        })
      } else if (this.posX * -1 / this.width < -0.5) {
        this.setState({
          activeSlide: this.state.activeSlide === 1 ? 1 : this.state.activeSlide - 1
        })
      } else {
        this.slider.style.left = this.startCoords;
      }

      this.posX = 0;
      this.onCarouselActive();
    }

    render() {
      return (
        <Component
          activeSlide={this.state.activeSlide}
          onSwipeStart={this.onSwipeStart}
        />
      );
    }
  }

  return WithMainSlider;
}

export default withMainSlider;
