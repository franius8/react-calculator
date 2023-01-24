import React from 'react';
import Button from './button.js';

function MainContainer(props: { click: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {
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
              key={number} activeButton={undefined} activeBackground={undefined} />
        })
      }
      </div>
  );
}

export default MainContainer;