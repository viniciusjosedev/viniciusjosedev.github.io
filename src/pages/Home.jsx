import React, { useState, useEffect } from 'react';
import style from '../styles/css/Home.module.css';
import { Spinner } from 'reactstrap';
import Navegation from '../components/Navegation';

function Home() {
	const [loading, setLoading] = useState(true);

	// Simulação de requisição para API
	useEffect(() => {
		async function init() {
			const timer = Math.random() * 5000 + 2000;
			setTimeout(() => {
				setLoading(false)
			}, timer);
		}
		init();
	}, [])

	if (loading) {
		return (
			<Spinner style={ { color: 'white' } }/>
		)
	}

  return (
		<>
			<Navegation />
			<header className={ style.header }>
				<h1>
					{ '<VJ />' }
				</h1>
			</header>
			<main className={style.main}>
				<div>
					<h1>Oi, me chamo Vinicius José.</h1>
				</div>
			</main>
		</>
	);
}

export default Home;
