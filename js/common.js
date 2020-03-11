$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="img/logo_burger.svg" alt="Логотип">'
		},
		offCanvas: {
			"position": "right"
		}
	});
	
		$('#my-menu2').mmenu({
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="../img/logo_burger.svg" alt="Логотип">'
		},
		offCanvas: {
			"position": "right"
		}
	});
	
	$('.popup').magnificPopup();

});
	
