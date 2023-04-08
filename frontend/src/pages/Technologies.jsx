import React from "react";
import Navegation from "../components/Navegation";
import style from '../styles/css/Technologies.module.css';
import TypeIt from "typeit-react";
import { animationGenerationProjectsTechnologies } from "../helpers/animationGeneration";
import iconHTML from '../styles/images/icon-html5.png';

export default function Technologies() {
	return (
		<>
			<Navegation />
			<main className={ style.main } id={ style.main }>
				<TypeIt 
					options={ { speed: 30 } }
					className={ style.spanTitle }
					getBeforeInit={ (instance) =>  animationGenerationProjectsTechnologies(instance, style)}
				>
					Aqui estão todas as minhas stacks de {' '}
					<span className={ style.colorBlue }>Front-End</span>!
				</TypeIt>
				<section className={ style.section }>
					<div className={ style.divFront }>
						<img src={ iconHTML } alt="" />
						{/* <img src="https://img.shields.io/badge/-CSS-0091f5?style=for-the-badge&logo=CSS3&logoColor=1572B6&labelColor=0091f5" alt="" />
						<img src="https://img.shields.io/badge/-SASS-0091f5?style=for-the-badge&logo=sass&labelColor=0091f5" alt="" />
						<img src="https://img.shields.io/badge/-JavaScript-0091f5?style=for-the-badge&logo=javascript&labelColor=0091f5" alt="" />
						<img src="https://img.shields.io/badge/-React.js-0091f5?style=for-the-badge&logo=react&labelColor=0091f5" alt="" />
						<img src="https://img.shields.io/badge/-jest%20&%20RTL-0091f5?style=for-the-badge&logo=jest&logoColor=purple&labelColor=0091f5" alt="" />
						<img src="https://img.shields.io/badge/-Redux-0091f5?style=for-the-badge&logo=redux&logoColor=764ABC&labelColor=0091f5" alt="" /> */}

					</div>
					<div className={ style.divBack }>
					  <h1>teste</h1>
						<h1>teste2</h1>
					</div>
				</section>
			</main>

		</>
	)
}

