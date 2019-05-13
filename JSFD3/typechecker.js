const sentenceTag = document.querySelector('input[type="text"]')

const typesizeTag = document.querySelector('input[name="typesize"]')
const typesizeOutput = document.querySelector("span.typesize-output")

const leadingTag = document.querySelector('input[name="leading"]')
const leadingOutput = document.querySelector("span.leading-output")

const outputTag = document.querySelector("textarea.output")

const italicTag = document.querySelector('input[name="italic"]')

const typefaceTag = document.querySelector('select[name="typeface"]')

const weightTag = document.querySelector('input[name="weight"]')
const weightOutput = document.querySelector("span.weight-output")

const colorTags = document.querySelectorAll("div.colors div")

const originalText = outputTag.value


// When I type in my sentence tag, update my output tag accordingly
// If there's no value, put in the original text

sentenceTag.addEventListener("keyup", function() {

	if(this.value) {
		outputTag.value = this.value
	} else {
		outputTag.value = originalText

	}

})


// When I type in my output tag, update the sentence tag accordingly

outputTag.addEventListener("keyup", function() {

		sentenceTag.value = this.value

})


// When I change my typesize slider, update the text next to it
// Change the outputTags font size


typesizeTag.addEventListener("input", function() {

	outputTag.style.fontSize = this.value + "px"

	typesizeOutput.innerHTML = this.value + "px"

})

leadingTag.addEventListener("input", function() {

	outputTag.style.lineHeight = this.value

	leadingOutput.innerHTML = this.value

})

// When I change my italic checkbox, update the font style to either normal or italic if it's checked or not

italicTag.addEventListener("change", function() {
	if(this.checked) {
		outputTag.style.fontStyle = "italic"
	} else {
		outputTag.style.fontStyle = "normal"
	}
})

// When I change my select for typeface, update the font family

typefaceTag.addEventListener("input", function() {

	outputTag.style.fontFamily = this.value

})

// When I change the weight slider, uupdate the text next to it
// Change the outputTags font weight

weightTag.addEventListener("input", function() {

	outputTag.style.fontWeight = this.value

	weightOutput.innerHTML = this.value

})


// Go through all of my colour tags
// When I click one of them, change the background coluour and text colour, and make this tag be selected

colorTags.forEach(tag => {

	tag.addEventListener("click", function() {

		outputTag.style.backgroundColor = this.style.backgroundColor
		outputTag.style.color = this.style.color

		colorTags.forEach(tag => {
			tag.classList.remove("selected")
		})

		

		this.classList.add("selected")
		
	})

})