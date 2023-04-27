$(function(){

	$('.top-slider__inner').slick({
		dots:true,
		arrows:false,
		fade:true
	});

	var mixer = mixitup('.week__items');

	$(".star").rateYo({
		starWidth: "40px",
		fullStar: true,
		readOnly: true
	 });
});