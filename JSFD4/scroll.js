const pixelsTag = document.querySelector("div.pixels")

const progressTag = document.querySelector("div.progress")

const bodyTag = document.querySelector("body")

const sections = document.querySelectorAll("section")

const pageTag = document.querySelector("div.page")

const clientTag = document.querySelector("div.client")

const headerTag = document.querySelector("header")


// When we scroll the page, update the pixelsTag to be how far we've scrolled

document.addEventListener("scroll", function() {
	const pixels = window.pageYOffset

	pixelsTag.innerHTML = pixels

})


// When we scroll the page, make a progress bar that keeps track of the distance

document.addEventListener("scroll", function() {
	const pixels = window.pageYOffset
	const pageHeight = bodyTag.getBoundingClientRect().height
	const totalScrollableDistance = pageHeight - window.innerHeight

	const percentage = pixels / totalScrollableDistance

	progressTag.style.width = `${100 * percentage}%`
})


// When we scroll the page, see how far down the page we've scrolled
// Then for each section, check whether we've passed it and if we have...
// Then update the text in the header

document.addEventListener("scroll", function() {
	const pixels = window.pageYOffset

	sections.forEach(section => {
		if (section.offsetTop - 60 <= pixels) {
			pageTag.innerHTML =  section.getAttribute("data-page")
			clientTag.innerHTML = section.getAttribute("data-client")

			if (section.hasAttribute("data-is-dark")) {
				headerTag.classList.add("white")
				progressTag.classList.add("white")
			} else {
				headerTag.classList.remove("white")
				progressTag.classList.remove("white")
			}
		}
	})
})


// When we scroll the page, make things parralax
// We want to move certain tags, based on how far they are from an anchor point
// What is the anchor point? Well, it's the middle of the section
// How far should we parralax? Well, it's a ratio of the distance scrolled to the middle point

document.addEventListener("scroll", function() {
	const topViewport = window.pageYOffset
	const midViewport = topViewport + (window.innerHeight / 2)

	sections.forEach(section => {
		const topSection = section.offsetTop
		const midSection = topSection + (section.offsetHeight / 2)

		const distanceToSection = midViewport - midSection

		const parallaxTags = section.querySelectorAll(`[data-parallax]`)

		// Loop over each parallaxed tag

		parallaxTags.forEach(tag => {
			const speed = parseFloat(tag.getAttribute("data-parallax"))
			tag.style.transform = `translate(0px, ${distanceToSection * speed}px)`
		})

		
	})

	
})