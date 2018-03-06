'use strict';

import React from 'react';
import AnimalPreview from './AnimalPreview';
import animals from '../data/animals';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="animals-selector">
          {animals.map(animalData => <AnimalPreview key={animalData.id} {...animalData} />)}
        </div>
      </div>
    );
  }
}
