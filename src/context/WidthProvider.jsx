import React, { useState } from 'react';
import WidthContext from './WidthContext';

export default function WidthProvider(props) {
	const [checkedLogin, setCheckedLogin] = useState(false);
  return (
    <WidthContext.Provider value={ { checkedLogin, setCheckedLogin } }>
      {props.children}
    </WidthContext.Provider>
  );
}

