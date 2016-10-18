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
		$('#fb').on('click', function() {
			window.open('http://www.facebook.com/sharer.php?s=100&p[title]=Самый%простой%вызов%машины%-%одной%кнопкой![summary]=Вызывайте%такси%в%приложения%АПАРУ:%для%вызова%машины%достаточно%нажать%одну%кнопку%и%по%вашему%заказу%приедет%наилучший%водитель&p[url]=http://taxi.aparu.kz&p[images][0]=http://taxi.aparu.kz/img/logo-big.png', '_blank');			
		});
		$('#od').on('click', function() {
			window.open('http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=Самый%простой%вызов%машины% -%одной%кнопкой!&st._surl=http://taxi.aparu.kz', '_blank');
		});
		$('#vk').on('click', function() {
			window.open('http://vk.com/share.php?url=http://taxi.aparu.kz', '_blank');
		});
	}
};

Aparu.shareHover();

})();