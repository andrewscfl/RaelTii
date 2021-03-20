import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Section from './components/section';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
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
          <div className="Flex-Child">
            <div class="heading">
              <h2>Plot</h2>
              <p>When summoned from the stars, a star slime known as Enoh finds himself escorting his rather useless god Rael across the land, inadvertently bumping into friend and foe alike. A world full of odd foes, bizarre landscapes, and capitalistic spirits; what has Enoh gotten himself into?<br/><br/>This is a turn-based RPG demo containing 6-8 hours of gameplay. Overworld assets, tilesets, and battle sprites developed by Airy Productions. All other credits are given at the end.</p>
            </div>
          </div>
          <div className="Flex-Child"><p>&nbsp;</p></div>
        </div>
      </Section>
    </div>);
  }
}

export default App;
