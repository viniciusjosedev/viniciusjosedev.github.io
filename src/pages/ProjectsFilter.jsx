import React from "react";
import Navegation from '../components/Navegation';
import styles from '../styles/css/ProjectsFilter.module.css';
import projects from "../data/listProjects";
import buttonGithub from '../styles/images/buttonGithub.svg';
import buttonDeploy from '../styles/images/buttonDeploy.svg';
import TypeIt from "typeit-react";
import { animationGenerationProjectsFilter } from "../helpers/animationGeneration";

export default function Projects() {
	return (
		<>
			<Navegation />
			<header className={ styles.header }>
				<TypeIt
					className={ styles.spanTitle }
					options={ { speed: 30, deleteSpeed: 15, loop: true } }
					getBeforeInit={(instance) => {
						return animationGenerationProjectsFilter(instance, styles);
					}}
				
				>
					Tela em {' '} <span className={ styles.colorBlue }>desenvolvimento</span>.
				</TypeIt>
			</header>
			<main className={ styles.main }>
				<section className={ styles.section }>
				{projects.map(({ name, image, github, deploy }) => (
						<div 
							className={ styles.divProject }
							key={ name }
						>
							<img src={image} alt={name} className={ styles.imgProject } />
							<div 
								className={ styles.divInfo }
							>
								<div>
									<button 
									  type="button" 
										className={styles['glow-on-hover']}
										onClick={ () => window.open(github, '_blank') }
										>
										<img src={ buttonGithub } alt="" />
									</button>
									{ deploy && (
										<button 
										type="button" 
										className={styles['glow-on-hover']}
										onClick={ () => window.open(github, '_blank') }
										>
											<img src={ buttonDeploy } alt="" />
										</button>
										) }
								</div>
								<p>{ name }</p>
							</div>
						</div>
					))}
				</section>
			</main>
		</>
	)
}
