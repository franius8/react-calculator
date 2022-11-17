import React from 'react';
import Button from './button';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];
    this.background = 'lightgrey'
    this.color = 'black'
  }
  render() {
    return (
      <div className="main-container">
      {
        this.numbers.map((number) => {
          return <Button
          click={this.props.click}
          value={number} 
          background={this.background} 
          color={this.color}key={number} />
        })
      }
      </div>
  );
  }
}

export default MainContainer;