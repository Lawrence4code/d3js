import React, { Component } from 'react';
import imageOne from '../images/hero.jpg';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> D3JS </h1>

        <div className="heading row">
          <h4>
            D3.js is a JavaScript library for manipulating documents based on
            data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s
            emphasis on web standards gives you the full capabilities of modern
            browsers without tying yourself to a proprietary framework,
            combining powerful visualization components and a data-driven
            approach to DOM manipulation.
          </h4>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="col s12 m4">
              <div className="projectOne">
                <img
                  className="projectOne__image"
                  src={imageOne}
                  alt="testing"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  voluptate esse explicabo culpa in quia praesentium reiciendis
                  dolorum dicta.
                </p>
                <div className="projectOne__buttons">
                  <div className="col s12 m6">
                    <a href="#!">View</a>
                  </div>
                  <div className="col s12 m6">
                    <a href="#!">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col s12 m4">
              <div className="projectTwo">
                <img
                  className="projectOne__image"
                  src={imageOne}
                  alt="testing"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  voluptate esse explicabo culpa in quia praesentium reiciendis
                  dolorum dicta.
                </p>
                <div className="projectTwo__buttons">
                  <div className="col s12 m6">
                    <a href="#!">View</a>
                  </div>
                  <div className="col s12 m6">
                    <a href="#!">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col s12 m4">
              <div className="projectThree">
                <img
                  className="projectOne__image"
                  src={imageOne}
                  alt="testing"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  voluptate esse explicabo culpa in quia praesentium reiciendis
                  dolorum dicta.
                </p>
                <div className="projectThree__buttons">
                  <div className="col s12 m6">
                    <a href="#!">View</a>
                  </div>
                  <div className="col s12 m6">
                    <a href="#!">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
