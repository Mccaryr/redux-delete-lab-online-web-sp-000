import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.band.name}
      </div>
    );
  }
};

export default Band;
