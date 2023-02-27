import React, { useContext, useState } from 'react';
import WidthContext from '../context/WidthContext';
import style from '../styles/css/Header.module.css';
import iconMenu from '../styles/icons/iconMenu.png';

function Header() {

	const [buttonHeader, setButtonHeader] = useState(false);

	const { width } = useContext(WidthContext)

  if (width <= 600) {
    return (
     <header className={style.header}>
      <h1>{'<VD />'}</h1>
			<img 
			src={iconMenu} 
			alt="icone Menu"
			onClick={ () => setButtonHeader(!buttonHeader)} />
			{buttonHeader ? (
			<div className={ style.divTeste }>
				<button 
				type="button" 
				onClick={ () => setButtonHeader(!buttonHeader)}
				>
					a
				</button>
			</div>
			) : null }
		 </header>
    );
  }
  return (
    <header className={style.header}>
      <h1>{'<VD />'}</h1>
      <nav>
        <p>Inicio</p>
        <p>Projetos</p>
        <p>Contato</p>
      </nav>
    </header>
  );
}

export default Header;
