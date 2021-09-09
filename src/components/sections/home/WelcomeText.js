import React from 'react';
import chuckImage from '../../../assets/images/chuck.png';

const WelcomeText = () => {
  return (
    <div className="d-flex align-center justify-center flex-column transparent fadeIn">
      <div style={{
        backgroundImage: `url('${chuckImage}')`,
        width: 50,
        height: 85,
        backgroundSize: 'contain'
      }} />
      <p className="accent-color">
        You are about to learn some facts about me.
        <br />
        What exactly are you interested in?
      </p>
    </div>
  );
};

export default WelcomeText;