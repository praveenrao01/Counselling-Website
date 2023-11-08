import React from 'react';

import './Header.css';
import images from '../../constants/images';

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-info">
        <h1 className="app-header-h1">
          Welcome to our counseling center where we prioritize your
          well-being....
        </h1>
        <button className="button">Get Help</button>
      </div>
      <div className="app-header-img">
        <img src={images} />
      </div>
    </div>
  );
};

export default Header;
