const listBlack = [document.getElementsByTagName('p'),
document.getElementsByTagName('a'),
document.getElementsByTagName('h1'),
document.getElementsByTagName('h2')]

const listC = [document.getElementsByTagName('header')[0],
document.getElementById('section-projetos'),
document.getElementById('section-contato')]

const listWhite = [document.getElementsByClassName('projetos'),
document.getElementsByTagName('footer')[0],
document.getElementsByTagName('body')[0]]

const transition = (theme) => {
	listBlack.forEach((elemento) => {
		for (let index = 0; index < elemento.length; index += 1) {
			elemento[index].style.color = (theme === 'dark' ? 'white' : 'black')
      if (elemento[index].class	= 'sobreposicao') {
				elemento[index].style.textShadow = `0.1em 0.1em 0.5em ${theme === 'dark' ? 'black': 'white'}`
			}
		}
	})
	listC.forEach((elemento, i) => {
		elemento.style.backgroundColor = (theme === 'dark' ? '#000000' : '#cccccc')
	})
	listWhite.forEach((elemento, i) => {
		if (i === 0) {
			for (let index = 0; index < elemento.length; index += 1) {
				if (index >= 3) {
					elemento[index].style.backgroundColor = (theme === 'dark' ? 'black' : '#cccccc')
				} else {
					elemento[index].style.backgroundColor = (theme === 'dark' ? '#222222' : 'white')
				}
			}
		} else {
			elemento.style.backgroundColor = (theme === 'dark' ? '#222222' : 'white')
		}
	})
	if (theme === 'dark') {
		document.getElementsByClassName('img-eclipse')[0].src = './images/brilho.png'
	} else {
		document.getElementsByClassName('img-eclipse')[0].src = './images/lua-crescente.png'
	}
}

const verific = () => {
	const storage = localStorage.getItem('theme');
	if (storage === 'dark') {	
		localStorage.setItem('theme', 'light')
		transition('ligth')
	} else {
		localStorage.setItem('theme', 'dark')
		transition('dark')
	}
}

const theme = () => {
	document.getElementById('img-eclipse').addEventListener('click', verific);
}

function init() {
	if (localStorage.getItem('theme') === null) {
		localStorage.setItem('theme', 'dark');
	} else {
		transition(localStorage.getItem('theme'))
	}
	theme()
  
}

window.onload = init()
