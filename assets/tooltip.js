(function ($){
	$.fn.tooltip = function(options){
		var settings = $.extend({
		    position: "bottom", //default
		    backgroundColor: "#fff"
		}, options);

		var tooltip = $('#tooltip');
		tooltip.removeAttr('class').addClass(settings.position);


		this.on('mouseover',function(){
			var title = $(this).find('a').attr('title');
			var words = title.split(' ').length;
			$('#tooltip').find('.labelTooltip').html(title+' - '+words);
			tooltip.appendTo(this).addClass('active');
		});

		this.on('mouseleave',function(){
			tooltip.removeClass('active');
		});

		return ;
	};


}(jQuery));