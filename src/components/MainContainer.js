import React from 'react';
import Button from './button';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
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