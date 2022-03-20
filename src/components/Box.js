import React from 'react';

const Box = props => {

  const BoxStyle = {
    height: `${props.size}px`,
    width: `${props.size}px`,
    backgroundColor: props.color,
    display: 'inline-block',
    margin: '10px'
  }

  return (
    <div style={BoxStyle}></div>
    );
}

export default Box;