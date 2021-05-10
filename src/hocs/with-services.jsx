import React from 'react';

const withServices = (Component) => {
  class WithServices extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeSlide: 1,
      }

      this.initPosX = 0;
      this.currentPosX = 0;
      this.posX = 0;
      this.leftCoord = 0;

      this.evt = ``;

      this.onTabChange = this.onTabChange.bind(this);
      this.onSwipeStart = this.onSwipeStart.bind(this);
      this.swipeAction = this.swipeAction.bind(this);
      this.swipeEnd = this.swipeEnd.bind(this);
    }

    onTabChange(slide) {
      this.setState({activeSlide: slide});
    }

    onSwipeStart(evt) {
      if (window.innerWidth >= 1024) {
        return;
      }

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

      if (this.leftCoord < this.width * -3) {
        this.leftCoord = this.width * -3;
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
          activeSlide: this.state.activeSlide === 4 ? 4 : this.state.activeSlide + 1
        })
      } else if (this.posX * -1 / this.width < -0.5) {
        this.setState({
          activeSlide: this.state.activeSlide === 1 ? 1 : this.state.activeSlide - 1
        })
      } else {
        this.slider.style.left = this.startCoords;
      }

      this.posX = 0;
    }

    render() {
      return (
        <Component
          activeSlide={this.state.activeSlide}
          onTabChange={this.onTabChange}
          onSwipeStart={this.onSwipeStart}
        />
      );
    }
  }

  return WithServices;
}

export default withServices;
