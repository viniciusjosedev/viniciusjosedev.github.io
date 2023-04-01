import React from "react";
import Navegation from '../components/Navegation';
import styles from '../styles/css/ProjectsFilter.module.css';
import projects from "../data/listProjects";

export default function Projects() {
	return (
		<>
			<Navegation />
			<main className={ styles.main }>
				<section className={ styles.section }>
			    {projects.map(({ name, image, github, deploy }) => (
						<div 
							key={ name }
							className={ styles.divProject }
						>
							<img src={image} alt={name} />
							<div 
								className={ styles.divInfo }
							>
								<a href={ github }>
									<button type="button">
										GitHub
									</button>
								</a>
								{ deploy && (
									<a href={ deploy }>
										<button type="button">
											GitHub
										</button>
									</a>
								) }
								<p>{ name }</p>
							</div>
						</div>
					))}
				</section>
			</main>
		</>
	)
}
