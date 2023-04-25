import React from "react";
import Navegation from "../components/Navegation";
import style from '../styles/css/Technologies.module.css';
import TypeIt from "typeit-react";
import { animationGenerationProjectsTechnologies } from "../helpers/animationGeneration";

import iconHTML from '../styles/images/icon-html5.png';
import iconCSS3 from '../styles/images/icon-css3.png';
import iconJavaScript from '../styles/images/icon-javascript.png';
import iconReact from '../styles/images/icon-react.png';
import iconrRedux from '../styles/images/icon-redux.png';
import iconSASS from '../styles/images/icon-sass.png';
import iconJest from '../styles/images/icon-jest.png';

import iconDocker from '../styles/images/icon-docker.png';
import iconNode from '../styles/images/icon-nodejs.png';
import iconMysql from '../styles/images/icon-mysql.png';
import iconExpress from '../styles/images/icon-express.png';

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
						<img src={ iconCSS3 } alt="" />
						<img src={ iconJavaScript } alt="" />
						<img src={ iconSASS } alt="" />
						<img src={ iconReact } alt="" />
						<img src={ iconrRedux } alt="" />
						<img src={ iconJest } alt="" />
					</div>
					<div className={ style.divBack }>
					  <img src={ iconDocker } alt="" />
						<img src={ iconMysql } alt="" />
						<img src={ iconNode } alt="" />
						<img src={ iconExpress } alt="" />
					</div>
				</section>
			</main>
			<div className={ style.divSeparation }>
				<p />
			</div>
		</>
	)
}
