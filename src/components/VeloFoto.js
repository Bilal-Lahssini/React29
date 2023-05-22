import React from 'react';
import StationImage from './StationImage';

function MyComponent(props) {
  return (
    <div>
      <StationImage station={props.station} />
    </div>
  );
}

export default MyComponent;