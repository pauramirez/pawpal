'use strict';
/* falta documentacion, se puede desacoplar mas este componente*/
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AnimalsMenu from './AnimalsMenu';
import Medal from './Medal';
import Flag from './Flag';
import animals from '../data/animals';

export default class AnimalPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const animal = animals.filter((animal) => animal.id === id)[0];
    if (!animal) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${animal.cover})` };
    return (
      <div className="animal-full">
        <AnimalsMenu animals={animals}/>
        <div className="animal">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${animal.image}`}/>
            <h2 className="name">{animal.name}</h2>
          </div>
          <section className="description">
            Cute animal from <strong><Flag code={animal.country} showName="true"/></strong>,
            reported in {animal.birth} (Find out more on <a href={animal.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="contact">
          <div className="text-center"><strong>Contact Form</strong></div>
                        <form ref={(input) => this.form = input} noValidate>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="hidden"
                                           name=""
                                           required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="text"
                                           placeholder="Your Name"
                                           name="name"
                                           onChange=""
                                           required/>
                                    <span className="input-group-addon">

                                    <i className="fa fa-id-card form-control-feedback"/>
                                </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="email"
                                           placeholder="Your Email"
                                           name="email"
                                           onChange=""
                                           required/>
                                    <span className="input-group-addon">
                                    <i className="fa fa-envelope form-control-feedback"/>
                                </span>
                                </div>
                            </div>
                            <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message" name="comment"
                                              rows="3" type="text" required/>
                            </div>
                            <div className="row justify-content-end">
                                <button type="button" className="btn btn-primary" >
                                    Send
                                </button>
                            </div>
                        </form>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
