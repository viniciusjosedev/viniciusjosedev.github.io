const listBlack = [document.getElementsByTagName('p'),
document.getElementsByTagName('a'),
document.getElementsByTagName('h1'),
document.getElementsByTagName('h2')]

const listC = [document.getElementsByTagName('header')[0],
document.getElementById('section-projetos'),
document.getElementById('section-contato'),
document.getElementsByClassName('section-tecnologias-div-2')[0]]

const listWhite = [document.getElementsByTagName('footer')[0],
document.getElementsByClassName('prjetos'),
document.getElementsByTagName('body')[0]]

const transition = (theme) => {
	listBlack.forEach((elemento) => {
		for (let index = 0; index < elemento.length; index += 1) {
			elemento[index].style.color = (theme === 'dark' ? 'white' : 'black')
		}
	})
	listC.forEach((elemento) => {
		elemento.style.backgroundColor = (theme === 'dark' ? '#222222' : '#cccccc')
	})
	listWhite.forEach((elemento, i) => {
		if (i <= 1) {
			for (let index = 0; index < elemento.length; index += 1) {
				elemento[index].style.backgroundColor = (theme === 'dark' ? 'black' : 'white')
			}
		} else {
			elemento.style.backgroundColor = 'white'
		}
	})
}

const verific = () => {
	const storage = localStorage.getItem('theme');
	if (storage === 'dark') {
		localStorage.setItem('theme', 'light')
		transition('ligth')
	// } else {
	// 	localStorage.setItem('theme', 'light')
	// 	transition('light')
	// }
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

window.onload = init()
