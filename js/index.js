$('a').click(function() {
	event.preventDefault()
})

$('.readmore').click(function() {
	$('#readMoreText').slideToggle()
})

$('.learnmore').click(function() {
	$('#learnMoreText').slideToggle()
})
