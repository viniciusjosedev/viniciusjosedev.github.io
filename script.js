const dict = {body: document.getElementsByTagName('body')[0],}

const dark = () => {
	({ body } = dict);
	body.style.backgroundColor = 'white';
}

const verific = () => {
	const storage = localStorage.getItem('theme');
	if (storage === 'ligh') {
		localStorage.setItem('theme', 'dark')
		dark()
	} else {
		localStorage.setItem('theme', 'ligh')
		ligh()
	}
}

const theme = () => {
	document.getElementById('img-eclipse').addEventListener('click', verific);
}

function init() {
	if (localStorage.getItem('theme') === null) {
		localStorage.setItem('theme', 'dark');
	} theme()
}

window.onload = init();