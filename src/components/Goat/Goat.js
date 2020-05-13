import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../App/helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    freeAGoat: PropTypes.func.isRequired,
    useAGoat: PropTypes.func.isRequired,
    goat: PropTypes.arrayOf(goatShape.goatShape),
  }

  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  }


  render() {
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div className="card">
          <img className="card-img-top" src={goat.imgUrl} alt="Goat card" />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.beardLength}</p>
          </div>
          <div className="card-footer">
          {
            goat.isBusy ? (
              <button className="btn btn-dark" onClick={this.freeGoatEvent}>Free Goat</button>
            ) : (
              <button className="btn btn-primary" onClick={this.useGoatEvent}>Use Goat</button>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
