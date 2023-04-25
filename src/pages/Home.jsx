import React, { useState, useEffect, useContext } from 'react';
import style from '../styles/css/Home.module.css';
import Navegation from '../components/Navegation';
import TypeIt from 'typeit-react';
import WidthContext from '../context/WidthContext';
import iconLogo from '../styles/images/icon-logo.svg';
import { animationGenerationHome } from '../helpers/animationGeneration';
import iconGithub from '../styles/images/iconGithub.png';
import iconLinkedin from '../styles/images/iconLinkedin.png';
import logoButton from '../styles/images/logoButton.svg';
import buttonContact from '../styles/images/buttonContact.svg';
import buttonPortfolio from '../styles/images/buttonPortfolio.svg';
import { useHistory } from 'react-router-dom';

function Home() {
  const [awaitAnimation, setAwaitAnimation] = useState(true);
	const { checkedHome, setCheckedHome } = useContext(WidthContext);
	const { push } = useHistory();


	// Simulação de requisição para API
	useEffect(() => {
		async function init() {
			if (checkedHome) setAwaitAnimation(false);

			else {
				setCheckedHome(true)
			}
		}
		init();
	}, [])

	const handleClick = () => {
		// const texto = `Isto é um teste.`
		// window.open(`https://wa.me/5581991550920?text=${encodeURIComponent(texto)}`, '_blank')
		window.open(`mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=teste&body=teste&cc=viniciusjosedev@gmail.com`)
	}


  return (
		<>
			<Navegation />
			<header className={ style.header }>
				<img src={iconLogo} alt="" />
				<button
				className={style['glow-on-hover']} 
				type="button"
				onClick={ handleClick }
				>
					<img src={logoButton} alt=""/>
				</button>
			</header>
			<main className={style.main}>
				<section>
					<div className={ style.divText }>
						{ awaitAnimation ? (
							<TypeIt
								className={style.spanTitle}
								getBeforeInit={(instance) => (
									instance.options({ speed: 30, deleteSpeed: 30 }).pause(500).type(`Ol, me chamo <span class="${style.spanTitle} ${style.colorFront}">Vinicius José</span>`)
									.pause(750).move(-24).type('á').move(24).type('!').pause(750).move(-24).delete(1).type('!')
									.move(24).delete(1).pause(2000)
								)}	
							/>
						) : <span className={style.spanTitle}>Olá! Me chamo <span className={`${style.spanTitle} ${style.colorFront}`}>Vinicius José</span></span>}
						<TypeIt
							className={style.spanText}
							getBeforeInit={(instance) => (
								animationGenerationHome(instance, style)
							)}
							options={ { speed: 5, startDelay: !checkedHome ? 9000 : 500, deleteSpeed: 5 } }>
							Tenho 20 anos e sou um desenvolvedor <span className={`${style.colorFront}`}>Front-End</span>. 
							Atualmente estou formado no módulo de fundamentos Front-End e no curso de Desenvolvimento 
							Web da Trybe. Aqui você encontra alguns dos principais projetos feito por mim e mais
						  algumas informações.
						</TypeIt>
						<div className={ style.divButtons }>
						<button
						type="button" 
						className={style['glow-on-hover']}
						onClick={ handleClick }
						>
							<img src={ buttonContact } alt="" />
						</button>
						<button 
						type="button" 
						className={style['glow-on-hover']}
						onClick={ () => push('/portfolio') }
						>
							<img src={ buttonPortfolio } alt="" />
						</button>
						</div>
						<div className={ style.divIcons }>
							<a 
							href="https://github.com/viniciusjosedev" 
							target="blank"
							>
								<img src={iconGithub} alt="Icone do GitHub" />
							</a>
							<a 
							href="https://www.linkedin.com/in/viniciusjosedev/" 
							target="blank"
							>
								<img src={iconLinkedin} alt="Icone do Linkedin" />
							</a>
						</div>
					</div>
				<img className={ style.iconLogo } src="https://avatars.githubusercontent.com/u/113393364?v=4" alt="" />
				</section>
			</main>
			<div className={ style.divSpace }>
				<p />
			</div>
		</>
	);
}

export default Home;
