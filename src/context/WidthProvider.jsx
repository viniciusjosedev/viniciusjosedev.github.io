import React from 'react';
import WidthContext from './WidthContext';

export default function WidthProvider(props) {
  return (
    <WidthContext.Provider value={ { ...props } }>
      {props.children}
    </WidthContext.Provider>
  );
}

