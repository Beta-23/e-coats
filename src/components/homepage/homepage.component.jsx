import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
      <h1>Welcome to E-Coats!</h1>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>BOYS COATS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>JACKETS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>GIRLS COATS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>WOMENS COATS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>MENS COATS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );

export default HomePage;