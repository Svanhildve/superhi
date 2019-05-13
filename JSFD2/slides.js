// pick all og the images and layer them based on the Z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// we want to keep track of two things
let currentSlide = 0
let z = 1

// When I click the slide area, change the slide based on Z-index
slideArea.addEventListener("click", function() {
	currentSlide = currentSlide + 1
	z = z + 1

	if (currentSlide > images.length - 1) {
		currentSlide = 0
	}

	// remove the animation from the style for every image

	images.forEach(function (image) {
		image.style.animation = ""
	})

	// Pick the right image
	images[currentSlide].style.zIndex = z
	images[currentSlide].style.animation = "fade 0.5s"

})

// when I put my mouse over the slide area, put all of the images in a random place
slideArea.addEventListener("mouseover", function() {
	images.forEach(function (image) {
		const x = 100 * Math.random() - 50
		const y = 100 * Math.random() - 50

		image.style.transform = `translate(${x}px, ${y}px)`
	})
})

// when I move my mouse away, put the images back
slideArea.addEventListener("mouseout", function() {
	images.forEach(function (image) {
		image.style.transform = ""
	})
})