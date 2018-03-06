'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AnimalsMenu extends React.Component {
  render() {
    return (
      <nav className="animals-menu">
        {this.props.animals.map(menuAnimal => {
          return <Link key={menuAnimal.id} to={`/animal/${menuAnimal.id}`} activeClassName="active">
            {menuAnimal.name}
          </Link>;
        })}
      </nav>
    );
  }
}
