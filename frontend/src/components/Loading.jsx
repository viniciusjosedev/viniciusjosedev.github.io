import React from "react";
import { Spinner } from 'reactstrap';
import style from '../styles/css/Loading.module.css'
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Loading() {
	const { push } = useHistory();

	useEffect(() => {
		async function init() {
			const timer = Math.random() * 2000 + 2000;
			setTimeout(() => {
				push('/home')
			}, timer);
		}
		init();
	}, [])

	return (
		<main className={style.main}>
			<Spinner className={ style.spinner } />
		</main>
	)
}

