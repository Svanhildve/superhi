// Variables

let pageNumber = 0

const pages = [
	{ copy: 'A designer', background: '#E4FFF3', circle: '#76E78E' },
	{ copy: 'based in Brooklyn', background: '#FFF8ED', circle: '#FFD491' }, 
	{ copy: 'who likes Kanye West', background: '#FFEFEF', circle: '#EEA0A0' },
	{ copy: 'looking for a job', background: '#EDF8FF', circle: '#A5DCFF' }, 
	{ copy: 'Cool cool cool', background: '#F9EDFF', circle: '#E2A8FF' },
]

const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")


// Functions

const next  = function() {
	pageNumber = pageNumber + 1

	if(pageNumber > pages.length - 1) {
		pageNumber = 0
	}

	updateSection()
}

const previous  = function() {
	pageNumber = pageNumber - 1

	if(pageNumber < 0) {
		pageNumber = pages.length - 1
	}

	updateSection()
}

const random = function() {
	pageNumber = Math.floor( Math.random() * pages.length )

	updateSection()
}

const updateSection = function() {
	outputTag.innerHTML = pages[pageNumber].copy
	circleTag.style.backgroundColor = pages[pageNumber].circle
	bodyTag.style.backgroundColor = pages[pageNumber].background
}


// Event listeners

nextTag.addEventListener("click", function() {
	next()
})

previousTag.addEventListener("click", function() {
	previous()
})

randomTag.addEventListener("click", function() {
	random()
})

document.addEventListener("keyup", function(event) {
	console.log(event)

	if (event.key == "ArrowLeft") {
		previous()
	}

	if (event.key == "ArrowRight") {
		next()
	}
})