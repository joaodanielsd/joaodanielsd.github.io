(function($){
    
    $('document').ready(function(){
        
        // banner home
        $('.home-slider ul').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            lazyLoad: 'ondemand'
        });
        
        // pagina sobre
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            lazyLoad: 'ondemand',
            asNavFor: '.slider-nav'
        });
        
        
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true
        });
        
        var settings = {
            username: 'lumen.com.br@gmail.com',
            albumsPerPage: 12
        };
        
        $("#fotos-antigas").pwi(settings);
        
        $(".hamburguer").click(function() {
            $(this).toggleClass("on");
            $("html").toggleClass("menu-open");
        });
        
        $(function() {
     	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

    });
    
})(jQuery);