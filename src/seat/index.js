import React, { Component } from 'react'

export default class Seat extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="side">
          <div className="bg" />
          <div>
            <h3>Cinema App</h3>
          </div>
          <ul className="menu">
            <li title className="selected"><i className="zmdi zmdi-label-alt" /> Today</li>
            <li title="Ladies Night"><i className="zmdi zmdi-female" /> Thrusday</li>
            <li title="Family Friday"><i className="zmdi zmdi-male-female" /> Friday</li>
            <li title><i className="zmdi zmdi-collection-item-1" /> Saturday</li>
            <li title><i className="zmdi zmdi-collection-item-2" /> Sunday</li>
            <li title="Monday for All"><i className="zmdi zmdi-accounts-alt" /> Monday</li>
            <li title="Kids Tuesday"><i className="zmdi zmdi-face" /> Tuesday</li>
            <li className="divider">
              <i className="zmdi zmdi-calendar" /> Coming Soon
      </li>
          </ul>
        </div>
        <div className="main-wrap">
          <div className="main">
            <div className="list">
              <div className="scroll">
                <button className="scrollTop"><i className="zmdi zmdi-arrow-left" /></button>
                <button className="scrollDown"><i className="zmdi zmdi-arrow-right" /></button>
              </div>
              <div className="content">
                <ul className="covers" />
              </div>
            </div>
            <div className="checkout">
              <div className="sinopsis">
                <button className="back">
                  <i className="zmdi zmdi-arrow-left" />
                </button>
                <img className="cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8zw8AAhMBENYXhyAAAAAASUVORK5CYII=" style={{ backgroundImage: 'url(https://image.tmdb.org/t/p/w300//gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg)' }} />
                <h3>Wonder Woman</h3>
                <p>An Amazon princess comes to the world of Man to become the greatest of the female superheroes.</p>
                <span>Wed, 28 Jun </span>
                <small>16:00 (2h 15m)</small>
              </div>
              <section>
                <ul className="legend">
                  <li>available</li>
                  <li>taken</li>
                </ul>
                <span>Select your seats</span>
                <div className="seats" />
                <div className="screen">screen</div>
              </section>
              <div className="total">
                <small>Total </small><span>$0</span>
                <button>CHECKOUT</button>
                <div className="loader" />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

