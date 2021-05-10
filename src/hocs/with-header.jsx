import React from 'react';

const withHeader = (Component) => {
  class WithHeader extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        menuOpened: false,
        signInOpened: false,
        signInValue: {
          [`sign-in-login`]: ``,
          [`sign-in-password`]: ``,
        },
      }

      this.onMenuOpening = this.onMenuOpening.bind(this);
      this.onMenuClosure = this.onMenuClosure.bind(this);
      this.onSignInOpening = this.onSignInOpening.bind(this);
      this.onSignInClosure = this.onSignInClosure.bind(this);
      this.closeSignInKeydown = this.closeSignInKeydown.bind(this);
      this.onSignInFieldChange = this.onSignInFieldChange.bind(this);
    }

    onMenuOpening() {
      this.setState({menuOpened: true});
    }

    onMenuClosure() {
      this.setState({menuOpened: false});
    }

    onSignInOpening() {
      this.setState({signInOpened: true});
      document.addEventListener(`keydown`, this.closeSignInKeydown);
    }

    onSignInClosure() {
      this.setState({signInOpened: false});
      document.removeEventListener(`keydown`, this.closeSignInKeydown);
    }

    closeSignInKeydown(evt) {
      if (evt.keyCode === 27) {
        this.onSignInClosure();
      }
    }

    onSignInFieldChange(evt) {
      const {name, value} = evt.target;

      this.setState({signInValue: Object.assign(
        {},
        this.state.signInValue,
        {name: value}
      )});
      localStorage.setItem(name, value);
    }

    render() {
      return (
        <Component
          state={this.state}
          onMenuOpening={this.onMenuOpening}
          onMenuClosure={this.onMenuClosure}
          onSignInOpening={this.onSignInOpening}
          onSignInClosure={this.onSignInClosure}
          onSignInFieldChange={this.onSignInFieldChange}
        />
      )
    }
  }

  return WithHeader;
};

export default withHeader;
