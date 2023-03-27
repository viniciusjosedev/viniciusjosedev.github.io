import React from 'react';
import style from '../styles/css/Navegation.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineMessage } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi'
import { RiLayoutGridFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

function Navegation() {
  const { location: { pathname } } = useHistory();

  return (
		<nav className={style.nav}>
		<Link to="/" className={ pathname === '/' ? style.checked : null }>
			<AiFillHome />
		</Link>
		<Link to="/teste" className={ pathname === '/teste' ? style.checked : null }>
			<BiCodeAlt />
		</Link>
		<Link>
			<RiLayoutGridFill />
		</Link>
		<Link>
			<AiOutlineMessage />
		</Link>
	 </nav>
	);
}

export default Navegation;
