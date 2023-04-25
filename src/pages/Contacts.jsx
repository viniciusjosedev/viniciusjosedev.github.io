import React from "react";
import Navegation from "../components/Navegation";
import style from '../styles/css/Contacts.module.css';

import TypeIt from "typeit-react";

import { animationGenerationContacts } from "../helpers/animationGeneration";

import buttonLinkedin from '../styles/images/buttonLinkedin.svg';
import buttonEmail from '../styles/images/buttonEmail.svg';

const handleClick = (url) => {
	window.open(url)
}

export default function Contacts() {
  return (
		<>
			<Navegation />
			<main className={ style.main }>
				<TypeIt 
					options={ { speed: 30 } }
					className={ style.spanTitle }
					getBeforeInit={ (instance) =>  animationGenerationContacts(instance, style)}
				>
					Vamos trabalhar juntos! Me contate pelo {' '}
					<span className={ style.colorFront }>Linkedin</span>!
				</TypeIt>
				<div className={ style.divButtons }>
					<button 
						type="button" 
						className={style['glow-on-hover']}
						onClick={ () => handleClick('https://www.linkedin.com/in/viniciusjosedev/') }
						>
							<img src={ buttonLinkedin } alt="" />
					</button>
					<button 
						type="button" 
						className={style['glow-on-hover']}
						onClick={ () => {
							const TEXTO = 'Fala Vinicius! Tenho um trabalho para fazermos! Tem interesse em saber mais?' 
							handleClick(`mailto:viniciusjosedev@gmail.com?subject=Vamos%20trabalhar%20juntos!&body=${TEXTO}&Content-Type=text/html`) }
						}
						>
							<img src={ buttonEmail } alt="" />
					</button>
				</div>
			</main>
		</>
	)
}
