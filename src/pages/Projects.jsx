import React from "react";
import Navegation from '../components/Navegation';
import styles from '../styles/css/Projects.module.css';
import TypeIt from "typeit-react";
import WidthContext from "../context/WidthContext";
import { useContext, useEffect, useState } from "react";
import { animationGenerationProjects } from '../helpers/animationGeneration';
import projects from "../data/listProjects";
import buttonAllProjects from '../styles/images/buttonAllProjects.svg';
import { useHistory } from "react-router-dom";
import buttonGithub from '../styles/images/buttonGithub.svg';
import buttonDeploy from '../styles/images/buttonDeploy.svg';

export default function Projects() {
	const { checkedProjects, setCheckedProjects } = useContext(WidthContext);
	const [awaitAnimation, setAwaitAnimation] = useState(true);
	const projectsFilter = projects.filter((element) => [11, 14, 15].includes(element.id));
	const { push } = useHistory();  

	useEffect(() => {
		async function init() {
			if (checkedProjects) setAwaitAnimation(false);
			else {
				setCheckedProjects(true)
			}
		}
		init();
	}, [])
	
	return (
		<>
			<Navegation />
			<main className={ styles.main }>
				<section className={ styles.sectionPrimary }>
					{ awaitAnimation ? (
						<TypeIt 
							className={styles.spanTitle}
							getBeforeInit={(instance) => (
								instance.options({ speed: 30 }).pause(500).type(`<span class='${styles.spanTitle}
								${styles.colorPurple}'>Meus principais projetos</span>`)
							)}	
						/>)	
					: (
						<span 
							className={`${styles.spanTitle} ${styles.colorPurple}`}
						>
							Meus principais projetos
						</span>
					)}
					<TypeIt
						className={ styles.spanText } 
						options={ { speed: 30, startDelay: !checkedProjects ? 3000 : 500 } }
						getBeforeInit={ (instance) => (
							animationGenerationProjects(instance, styles)
						) }
					>
						Abaixo estão os meus principais projetos de
						{' '}
						<span className={ styles.colorBlue }>
							Front-End
						</span>
						. Espero que curta!
					</TypeIt>
					<button 
						type="button"
						className={styles['glow-on-hover']}
						onClick={ () => push('/projects/filter') }
					>
					  <img src={ buttonAllProjects } alt="" />
					</button>
					{projectsFilter.filter((e, i) => i === 0).map(({ name, image, github, deploy }) => (
						<div
							className={ `${styles.divProject}` }
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
											onClick={ () => window.open(deploy, '_blank') }
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
				<section className={ styles.sectionSecond }>
					{projectsFilter.filter((e, i) => i !== 0).map(({ name, image, github, deploy }) => (
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
