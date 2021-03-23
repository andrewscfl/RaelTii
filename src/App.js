import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Section from './components/section';
import Button from './components/Button';
import Gallery from 'react-photo-gallery';
import Modal from './components/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.gallery = [{
      src: '/imageAssets/showcase1.png',
      width: 4,
      height: 3
    },
    {
      src: '/imageAssets/showcase2.png',
      width: 4,
      height: 3
    },
    {
      src: '/imageAssets/showcase3.png',
      width: 4,
      height: 3
    },
    {
      src: '/imageAssets/showcase4.png',
      width: 4,
      height: 3
    }];
    this.state = {
      showModal: false,
      modalImg: null,
    }
  }

  img_click_handler = (target) => {
    this.setState({ modalImg: target });
    this.setState({ showModal: true });
  }

  close_modal = () => {

    this.setState({ showModal: false });
    this.setState({ modalImg: null });
  }




  render() {
    return (<div>
      <Section classPlus="homeBanner">
        <div className="inner-banner">
          <h1>RaelTii</h1>
          <p>By Airy Productions</p>
          <Button link="https://airyproductions.itch.io/rael-tii" iconClass="fa fa-download" buttonTitle="Download on itch.io" extraClass="purpleButton" />
        </div>

      </Section>
      <Section>
        <div className="Flex">
          <div className="Flex-Child Flex-Content">
            <div class="heading">
              <h2>Plot</h2>
              <p>When summoned from the stars, a star slime known as Enoh finds himself escorting his rather useless god Rael across the land, inadvertently bumping into friend and foe alike. A world full of odd foes, bizarre landscapes, and capitalistic spirits; what has Enoh gotten himself into?</p>
            </div>
          </div>
          <div className="Flex-Child">

            <Gallery photos={this.gallery} onClick={(e) => this.img_click_handler(e.currentTarget.src)} />
            {this.state.showModal ? <Modal modalImg={this.state.modalImg} callback={this.close_modal} /> : ''}
          </div>
        </div>
      </Section>
      <Section>
        <div className="Flex">
          <div className="Flex-Child">
            <Gallery photos={this.gallery} onClick={(e) => this.img_click_handler(e.currentTarget.src)} />
            {this.state.showModal ? <Modal modalImg={this.state.modalImg} callback={this.close_modal} /> : ''}
          </div>
          <div className="Flex-Child Flex-Content-2">
            <div class="heading">
              <h2>Gameplay</h2>
              <p>This is a turn-based RPG demo containing 6-8 hours of gameplay. Overworld assets, tilesets, and battle sprites developed by Airy Productions. All other credits are given at the end.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section classPlus="sparkle">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>
      </Section>
    </div>);
  }
}

export default App;
