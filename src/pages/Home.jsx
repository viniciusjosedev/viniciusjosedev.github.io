import React, { useState, useEffect, useContext } from 'react';
import style from '../styles/css/Home.module.css';
import { Spinner } from 'reactstrap';
import Navegation from '../components/Navegation';
import TypeIt from 'typeit-react';
import WidthContext from '../context/WidthContext';
import iconLogo from '../styles/images/icon-logo.svg';
import animationGeneration from '../helpers/animationGeneration';
import iconGithub from '../styles/images/iconGithub.png';
import iconLinkedin from '../styles/images/iconLinkedin.png';


function Home() {
	const [loading, setLoading] = useState(false);
  const [awaitAnimation, setAwaitAnimation] = useState(true);
	const { checkedLogin, setCheckedLogin } = useContext(WidthContext);
	// Simulação de requisição para API
	useEffect(() => {
		async function init() {
			console.log("pasosu aqui");
			if (checkedLogin) setAwaitAnimation(false);

			else {
				const timer = Math.random() * 5000 + 2000;
				setTimeout(() => {
					setLoading(false);
					setCheckedLogin(true)
					setAwaitAnimation(true)
				}, timer);
			}
		}
		init();
	}, [])

	if (loading && !checkedLogin) {
		return (
			<Spinner style={ { color: 'white' } }/>
		)
	}

  return (
		<>
			<Navegation />
			<header className={ style.header }>
				<img src={iconLogo} alt="" />
				<button className={style['glow-on-hover']}>Trabalhe Comigo</button>
			</header>
			<main className={style.main}>
				<section>
					<div className={ style.divText }>
						{ awaitAnimation ? (
							<TypeIt
								className={style.spanTitle}
								getBeforeInit={(instance) => (
									instance.options({ speed: 30, deleteSpeed: 30 }).pause(500).type(`Ol, me chamo <span class="${style.spanTitle} ${style.color}">Vinicius José</span>`)
									.pause(750).move(-24).type('á').move(24).type('!').pause(750).move(-24).delete(1).type('!')
									.move(24).delete(1).pause(2000)
								)}	
							/>
						) : <span className={style.spanTitle}>Olá! Me chamo <span className={`${style.spanTitle} ${style.color}`}>Vinicius José</span></span>}
						<TypeIt
							className={style.spanText}
							getBeforeInit={(instance) => (
								animationGeneration(instance, style)
							)}
							options={ { speed: 5, startDelay: !checkedLogin ? 8000 : 500, deleteSpeed: 5 } }>
							Tenho 20 anos e sou um desenvolvedor <span className={`${style.color}`}>Front-End</span>. 
							Atualmente estou formado no módulo de fundamentos Front-End e no curso de Desenvolvimento 
							Web da Trybe. Aqui você encontra alguns dos principais projetos feito por mim e mais
						  algumas informações.
						</TypeIt>
						{/* <button type="button">Fale comigo</button>
						<div className={ style.divIcons }>
							<img src={iconGithub} alt="" />
							<img src={iconLinkedin} alt="" />
						</div> */}
					</div>
				<img className={ style.iconLogo } src="https://avatars.githubusercontent.com/u/113393364?v=4" alt="" />
				</section>
			</main>
		</>
	);
}

export default Home;
