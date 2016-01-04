(function($){
	$(function(){
		init();
	});
	function init(){
		console.log('If you can see this, your javascript file is in the right place!');
		priceWeightMove();
	}

	function priceWeightMove(){
		$.each($('.item-grid .price-box .price-circle'), function(){
			var cents = $(this).find('.cents');
			if($(cents).text() == '' ){
				$(this).find('.per').addClass('shift');
			}
		});
	}
})(jQuery);