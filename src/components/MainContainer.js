import React from 'react';
import Button from './button';

function MainContainer(props) {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    const background = 'lightgrey'
    const color = 'black'

    return (
      <div className="main-container">
      {
        numbers.map((number) => {
          return <Button
          click={props.click}
          value={number} 
          background={background}
          color={color}
         key={number} />
        })
      }
      </div>
  );
}

export default MainContainer;