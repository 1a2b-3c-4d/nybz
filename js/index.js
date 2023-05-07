
loading()
function loading(){
	let i = 0
	let timer = setInterval(()=>{
		if(i>100){
			page1()
			clearInterval(timer)
			return
		}
		document.querySelector('.loading p').innerHTML = i+'%'
		
		i++
	},20)
}

function page1(){
	document.querySelector('.loading').style.display = 'none'
	document.querySelector('.page1').style.display = 'block'
	document.querySelector('.start').onclick = function(){
		document.querySelector('.page1').style.display = 'none'
		document.querySelector('.page2').style.display = 'block'
	}
}

let timer = 0
let my = document.querySelector('.mfish')
let count = 0
let flag = false
page2()
function page2(){
	let mfish = document.querySelector('.mfish')
	let hanmmer = document.querySelector('.hanmmer')
	let gongde = document.querySelector('.gongde')
	let counts = document.querySelector('.count')
	document.querySelector('.page2').addEventListener('click',function(){
		if(flag) {
			counts.innerHTML = '功德:'+0
			return
		}
		ismyu(mfish)
		count += 114514
		counts.innerHTML = '功德:'+count 
		mfish.animate([
			{transform: 'scale(1)'},
			{transform: 'scale(1.1)'},
			{transform: 'scale(1)'}
		],{
			duration:500
		})
		
		hanmmer.animate({
			transform:['rotate(0deg)','rotate(-10deg)','rotate(0deg)']
		},{
			duration:200
		})
		
		gongde.animate({
			transform: ['translateY(0vh)','translateY(-10vh)'],
			opacity:[0,1,0]
		},{
			duration:500
		})
		
	})
	
}

//判断木鱼点击次数
function ismyu(){
	timer++
	if(timer == 20){
		my.src = './img/p3/myu1.png'
	}else if(timer == 40){
		my.src = './img/p3/myu2.png'
	}else if(timer == 60){
		my.src = './img/p3/myu3.png'
	}else if(timer == 80){
		my.src = './img/p3/myu4.png'
	}else if(timer == 100){
		my.src = './img/p3/p3.gif'
		my.style.display = 'none'
		document.querySelector('.over').style.display = 'block'
		document.querySelector('.gif').style.display = 'block'
		count = 0
		flag = true
	}
	console.log(timer);
}

