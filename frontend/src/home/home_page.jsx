import React from 'react';
import Carousel from '../components/carousel/carousel';
import UserIndexContainer from '../components/user_grid/user_index/user_index_container';
import WordSpin from '../components/word_spin/word_spin';
import "./home_page.scss";

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page'>
        <div className="home-container">
          <h1>Find your niche</h1>
          <div className='home-page-top'>
            <Carousel />
            <WordSpin />
          </div>
          <h1>Connect with experts</h1>
          <UserIndexContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;