$(document).ready(function(){
	//Secciones
	interactiveSections()

	//Menu fijo
	fixedMenu()
	
	//Galery
	galery();
	
 	//Validar
 	validate(); 
 	$("#form-join").submit(function(event){ 
 		if (!validate()){
			event.preventDefault();
			alert("formulario ");
		}
 	});
 	$("#form-contact").submit(function(event){ 
 		if (!validate()){
			event.preventDefault();
			alert("formulario ");
		}
 	});
 	
});

/*
 * Canbio de paginas atravez de agregar y remover clases 
 */
function interactiveSections(){
	$('#menu ul li').click(function(){
		let active  = $('#content').find('.active'),
			content = $(this).attr('id').substring(3);

		active.removeClass('active').hide(400);
		$('#' + content).addClass('active').show(400);
	});
}

/*
 * Funcion para manterner fijo el menu
 */
function fixedMenu(){
	$(window).scroll(function(){    
	     let heightHeader = $('#header-content').outerHeight(true),
             heightMenu   = $('#menu').outerHeight(true);

	    if ($(window).scrollTop() >= heightHeader){
        	$('#menu').addClass('fixed');
	        //$('#content').css('margin-top', (heightMenu) + 'px');
	    } 
	    else {
	        $('#menu').removeClass('fixed');
	    }
	});
}

/*
 * Funcion para agregar contenido a la galeria con sus links
 */
function galery(){
	let url = [ "",
				"https://polka.academy",
				"https://swallowtailtea.com",
				"https://wallrus.net",
				"https://www.kleinschmidt.com/ks",
				"https://www.weekendavisen.dk",
				"https://lunatap.com",
				"https://kobointeriors.com",
				"https://startups.getgrover.com",
				"https://iconwerk.com",
				"https://www.langzullenwelezen.be",
				"https://www.urbansplash.co.uk",
				"https://zrs-berlin.de",
				"https://artistsresearchcentre.org.uk",
				"https://packlane.com",
				"http://reseau.coop",
				"http://brandfolks.com"
			  ]; 
	for (let i = 1; i < 17; i++) {
		$('.grid-galery').append('<figure class="items-galery"><a href="' + url[i] + '"><img src="images/portfolio/portfolio-' + i + '.jpg"></a></figure>');	
	}
}

/*
 * Validacion de formulario
 */
function validate(event){
	let valid      = false,
	iconValid      = {color  : 'green', display: 'inline'},
	iconInvalid    = {color  : 'red', display: 'inline'},
	borderValid    = {border : '1px solid green'},
	borderInvalid  = {border : '1px solid red'},
	idNotification, regularExpresion, idForm;
 
	$(".nameinput").focusout(function(){
		idNotification = '#name-valid'
		regularExpresion = new RegExp(/^[a-z A-Z]{4,30}$/);

		if ($(this).parent().parent().attr("id") == "form-join"){
			idNotification = '#name-valid-cv';
		}

		if (regularExpresion.test(this.value)){
			$(this).css(borderValid);
			$(idNotification).text("done").css(iconValid);
			valid = true;
		}
		else{
			$(idNotification).text("clear").css(iconInvalid);
			$(this).css(borderInvalid);
		}
	});

	$(".emailinput").focusout(function(){
		idNotification = '#email-valid'
		regularExpresion = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

		if ($(this).parent().parent().attr("id") == "form-join"){
			idNotification = '#email-valid-cv';
		}

		if (regularExpresion.test(this.value)){
			$(this).css(borderValid);
			$(idNotification).text("done").css(iconValid);
			valid = true;
		}
		else{
			$(this).css(borderInvalid);
			$(idNotification).text("clear").css(iconInvalid);
		}
	});

	/*
	 * Validacion de documentos
	 */
	 $("#cv-document").change(function( ) {
		cv = this.files[0];

		//Control de tamaño de imagen
		if (Number(cv.size) < 9000000){
			//Control de tipo de imagen
			if (cv.type == "application/pdf"){
				valid = true;
			}
			else{
				alert("Tipo de archivo no valido");
			}
		}
		else{
			alert("archivo demasiado grande");
		}
	});
}