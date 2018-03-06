'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-paw.jpg" />
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <h1><strong>Know our why</strong></h1>
          <p>
            Help all the animals out there.
          </p>
          <h1><strong>Know our history and be part of it</strong></h1>
          <p>
          Some Day.......
          </p>
          <h1><strong>Get in touch with us</strong></h1>
          <p>
            pj.ramirez10@uniandes.edu.co
          </p>
        <footer>
          <p>
            Built with <strong>❤</strong>︎ by Paula Ramirez & David Cubillos
          </p>
        </footer>
      </div>
    );
  }
}
