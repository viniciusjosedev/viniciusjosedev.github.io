import React, { useMemo, useState } from 'react';
import WidthContext from './WidthContext';

export default function WidthProvider(props) {
	const [checkedHome, setCheckedHome] = useState(false);
	const [checkedProjects, setCheckedProjects] = useState(false);

	const valuesExport = useMemo(() => (
		{
			checkedHome,
			setCheckedHome,
			checkedProjects,
			setCheckedProjects
		}
	), [checkedHome, setCheckedHome, checkedProjects,setCheckedProjects])

  return (
    <WidthContext.Provider value={ { ...valuesExport } }>
      {props.children}
    </WidthContext.Provider>
  );
}

