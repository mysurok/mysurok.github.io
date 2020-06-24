let surLeft = 0;
let surTop = 400;
let frankLeft = 650;
let frankTop = 400;
let teleTime = 0;
let score = [0, 0, 0, 0, 0, 0]
let prizes = []
let isPause = false

function hello(element) {
	alert('hello!')
	document.body.style.backgroundImage = 'url(img/grass.jpg)'
	element.style.display='none'
	document.getElementById('header').style.display = 'none'
	surok()
	frank()
	newPrize()
}
// Функция, которая создаёт новые призы
function newPrize(){
	const prize = document.createElement('img')
	prize.className='prize'
	const prizeN = Math.ceil(Math.random() * 5)
	prize.src='img/prize' + prizeN +'.png'
	prize.style.left = Math.random() * 1150 + 'px'
	prize.style.top = Math.random() * 580 + 'px'
	prize.dataset.nuuumer = prizeN.toString()

	document.body.appendChild(prize)
	prizes.push(prize)
}
function surok() {
	document.getElementById('cursor').style.display= 'block'
	document.addEventListener('keydown', surgo)
}
// Функция создания Франкенштейна
function frank() {
	document.getElementById('frank').style.display= 'block'
	setInterval(frankgo, 300)
}

// Функция перемещения Франкенштейна
function frankgo(){
	if (isPause) {
		return
	}
	const frank = document.getElementById('frank')
	if(frankLeft>surLeft){
		frankLeft = frankLeft - 30
		frank.style.transform='scaleX(1)'
	}
	if(frankLeft<surLeft){
		frankLeft = frankLeft + 30
		frank.style.transform='scaleX(-1)'
	}
	if(frankTop>surTop){
		frankTop = frankTop - 30
	}
	if(frankTop<surTop && frankTop < 550){
		frankTop = frankTop + 30
	}
	frank.style.left = frankLeft + 'px'
	frank.style.top = frankTop + 'px'

// Франк ловит Сурка и телепортирует его на нулевую точку
	if(Math.abs(surLeft - frankLeft) < 20 && Math.abs(surTop - frankTop) < 20){
		surLeft = 0
		surTop = 400
		document.getElementById('cursor').style.left = 0 + 'px'
		document.getElementById('cursor').style.top = 400 + 'px'
	}

}

function surgo(e){
	if (e.keyCode===32){
		isPause = !isPause;
		document.getElementById('pause').style.display = isPause ? "block" : "none"
	}
	if (isPause){
		return
	}
// Сурок идёт направо
	if(e.keyCode===39 && surLeft<1200){
		surLeft = surLeft + 20
	}
// Сурок идёт налево
	if(e.keyCode===37 && surLeft > 0){
		surLeft = surLeft-20
	}
// Сурок идёт вверх
	if(e.keyCode===38 && surTop>0){
		surTop = surTop-20
	}
// Сурок идёт вниз
	if(e.keyCode===40 && surTop<580 ){
		surTop = surTop+20
	}
// Телепорт
	if(e.keyCode===84 && new Date().getTime() - teleTime > 20*1000){
		teleTime=new Date().getTime()
		surTop = 100
		surLeft = 800
	}
// Новое сокровище
	if(e.keyCode===13){
		newPrize()
	}
	document.getElementById('cursor').style.left = surLeft + 'px'
	document.getElementById('cursor').style.top = surTop + 'px'

// Сурок берёт сокровище
	prizes.find((prize, i) => {
		if(Math.abs(surLeft - prize.offsetLeft) < 20 && Math.abs(surTop - prize.offsetTop) < 20){
			const prizeN = parseInt(prize.dataset.nuuumer, 10)
			score[prizeN] = score[prizeN] + 1
			document.getElementById('prize'+prizeN).innerText=score[prizeN].toString()
			prize.remove()
			prizes.splice(i, 1)
			if (prizes.length===0) {
				newPrize()
			}
		}
	})

}

function byebye(){
	alert( 'Byebye')
}
