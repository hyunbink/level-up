import React from 'react';
import Carousel from '../components/carousel/carousel';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page'>
        <div className="home-container">
          <h1>Amog Us vs Them</h1>
          <Carousel />
          <footer>
            Copyright &copy; 2022 gamErs 
          </footer>
        </div>
      </div>
    );
  }
}

export default HomePage;