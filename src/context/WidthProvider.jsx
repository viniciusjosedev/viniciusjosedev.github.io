import React, { useEffect, useState } from 'react';
import WidthContext from './WidthContext';

export default function WidthProvider(props) {

	const [width, setWidth] = useState(0)

	useEffect(() => {
		setInterval(() => {
			setWidth(window.innerWidth);
		}, 0)
	}, [])
	

  return (
    <WidthContext.Provider value={ { width, ...props } }>
      {props.children}
    </WidthContext.Provider>
  );
}

