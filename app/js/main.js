$(function(){

	$('.top-slider__inner').slick({
		dots:true,
		arrows:false,
		fade:true
	});

	var mixer = mixitup('.week__items');

	var mixer = mixitup('.design__items');

	$(".star").rateYo({
		starWidth: "40px",
		fullStar: true,
		readOnly: true
	 });

	  // получаем высоту блока block-1
	 //var block1Height = $('.articles__content').height();

	// сдвигаем блок block-2 на высоту блока block-1
	//$('.articles__partners').css('bottom', block1Height); 

});