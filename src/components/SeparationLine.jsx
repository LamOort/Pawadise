import React from 'react';

const SeparationLine = ({position, bottom, opacity, margin}) => (
    <hr
      style={{
        position: position,
        bottom: bottom, 
        opacity: opacity, 
        margin: margin,
      }}
    />
  );

export default SeparationLine;