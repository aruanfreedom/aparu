(function() {

'use strict';

var Aparu = {
	shareHover: function() {
		$('.share-content').hide("slow"); 
		$('.share-block').on('click', function() {
			$(this).find(".share-content").toggle("slow");
		});	
		$(".share-content").on("mouseleave", function () {
			$(this).hide('slow');
		});
	}
};

Aparu.shareHover();

})();