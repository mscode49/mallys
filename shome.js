
let data = {
	uhr: new Date()
};
$().ready( function(){
	let titr   = $('#titr-h1'),
	    btn    = $('#btn_all'),
	    btnUl  = $('#btn_all ul'),
	    btnLi  = $('#btn_all ul li'),
	    btnBtn = $('#btn_all ul li'),
	    pImg   = $('.mimg');

	if ( $(window).width() >= 360 ){
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		titr.css({
			'fontSize': '40px',
			'border': 'solid 1px yellow'
		});
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		btnBtn.css({
			'display': 'flex',
			'flexDirection': 'column'
		})

		pImg.on('mouseover', function(){
			var txt = "<h2>[#] YOUR PHONE ARE NOW HACKED !!![#] Ha Ha Ha Ha Ha Ha</h2>";
				setTimeout(function(){
			        $('.p marquee').html(txt).css({
			        	'marginTop': '-10%',
			        	'color': 'red',
			        	'textAlign': 'center',
			        	'textShadow': '1px 2px 1px black'
			        });
				}, 1000);
		
			$('.hack', function(){
				setTimeout(function(){
					$('.hack').fadeOut(2000);
					txt = "<h1> IST NUR SPAßE KEINE SORGE </h1>";
			        $('.p marquee').html(txt).css({
			        	'marginTop': '-10%',
			        	'color': 'red',
			        	'textAlign': 'center',
			        	'textShadow': '1px 2px 1px black'
			        });
				}, 8000);
			});
			//alert("mouseover");
		});
	}; /* FIN DE IF */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	alert("Try" + data.uhr);
});