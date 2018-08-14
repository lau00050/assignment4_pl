// ************** //
// preventDefault //
// ************** //
$('a').click(function() {
	event.preventDefault()
})

// ************* //
  // readMore //
// ************* //
$('.readMore').click(function() {
	$('#readMoreText').slideDown()
	$('.readLess').slideDown()
	$('.readMore').css('display', 'none')
})

$('.readLess').click(function() {
	// console.log('test link')
	$('#readMoreText').slideUp()
	$('.readMore').slideUp()
	$('.readLess').css('display', 'none')
	$('.readMore').css('display', 'block')
})

// ************* //
  // learnMore //
// ************* //
$('.learnMore').click(function() {
	$('#learnMoreText').slideDown()
	$('.learnLess').slideDown()
	$('.learnMore').css('display', 'none')
})

$('.learnLess').click(function() {
	// console.log('test link')
	$('#learnMoreText').slideUp()
	$('.learnMore').slideUp()
	$('.learnLess').css('display', 'none')
	$('.learnMore').css('display', 'block')
})
