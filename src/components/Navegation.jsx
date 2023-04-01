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
		<Link to="/home" className={ pathname === '/home' ? style.checked : null }>
			<AiFillHome />
		</Link>
		<Link 
		  to="/projects"
		  className={ pathname === '/projects' || pathname === '/projects/filter' ? style.checked : null }
			>
			  <RiLayoutGridFill />
		</Link>
		<Link to="/technologies" className={ pathname === '/technologies' ? style.checked : null }>
			<BiCodeAlt />
		</Link>
		<Link to="/contact" className={ pathname === '/contact' ? style.checked : null }>
			<AiOutlineMessage />
		</Link>
	 </nav>
	);
}

export default Navegation;
