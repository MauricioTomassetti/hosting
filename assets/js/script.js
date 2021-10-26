$('body').scrollspy({
	target: '#collapseEx2'
});
$(function () {

	window.sr = ScrollReveal();

	if ($(window).width() < 768) {

		if ($('.timeline-content').hasClass('js--fadeInLeft')) {
			$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
		}

		sr.reveal('.js--fadeInRight', {
			origin: 'right',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 800,
		});

	} else {

		sr.reveal('.js--fadeInLeft', {
			origin: 'left',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 800,
		});

		sr.reveal('.js--fadeInRight', {
			origin: 'right',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 800,
		});

	}

	sr.reveal('.js--fadeInLeft', {
		origin: 'left',
		distance: '300px',
		easing: 'ease-in-out',
		duration: 800,
	});

	sr.reveal('.js--fadeInRight', {
		origin: 'right',
		distance: '300px',
		easing: 'ease-in-out',
		duration: 800,
	});


});


$(function () {


	var d = document,
		accordionToggles = d.querySelectorAll(".js-accordionTrigger"),
		setAria,
		setAccordionAria,
		switchAccordion,
		touchSupported = "ontouchstart" in window,
		pointerSupported = "pointerdown" in window;

	skipClickDelay = function (e) {
		e.preventDefault();
		e.target.click();
	};

	setAriaAttr = function (el, ariaType, newProperty) {
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function (el1, el2, expanded) {
		switch (expanded) {
			case "true":
				setAriaAttr(el1, "aria-expanded", "true");
				setAriaAttr(el2, "aria-hidden", "false");
				break;
			case "false":
				setAriaAttr(el1, "aria-expanded", "false");
				setAriaAttr(el2, "aria-hidden", "true");
				break;
			default:
				break;
		}
	};
	//function
	switchAccordion = function (e) {
		console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if (thisAnswer.classList.contains("is-collapsed")) {
			setAccordionAria(thisQuestion, thisAnswer, "true");
		} else {
			setAccordionAria(thisQuestion, thisAnswer, "false");
		}
		thisQuestion.classList.toggle("is-collapsed");
		thisQuestion.classList.toggle("is-expanded");
		thisAnswer.classList.toggle("is-collapsed");
		thisAnswer.classList.toggle("is-expanded");

		thisAnswer.classList.toggle("animateIn");
	};
	for (var i = 0, len = accordionToggles.length; i < len; i++) {
		if (touchSupported) {
			accordionToggles[i].addEventListener("touchstart", skipClickDelay, false);
		}
		if (pointerSupported) {
			accordionToggles[i].addEventListener(
				"pointerdown",
				skipClickDelay,
				false
			);
		}
		accordionToggles[i].addEventListener("click", switchAccordion, false);
	}



	//Grafico ML con tienda online y link de cobro
	var ctx = document.getElementById('comisionesML').getContext('2d');

	const labels = ['En el momento.', '10 días de aprobado a liquidar.', '18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.'];
	data = {
		labels: labels,
		datasets: [{
			label: 'Costo de comision a liquidar en dias.',
			data: [6.39, 4.29, 3.39, 1.79],
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		}]
	}


	var chartInstance = new Chart(ctx, {
		type: "line",
		data: data
	});

		//Grafico ML con Point
		var ctxMLPoint = document.getElementById('comisionesMLPoint').getContext('2d');

		const labelsMlPoint = ['En el momento.', '1 días de aprobado a liquidar.', '2 días de aprobado a liquidar.', '10 días de aprobado a liquidar.','18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.', '70 días de aprobado a liquidar.'];
		data = {
			labels: labelsMlPoint,
			datasets: [{
				label: 'Con tarjeta de débito',
				data: [3.15, 3.09],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			},
			{
				label: 'Con tarjeta de crédito',
				data: [6.39,6.39,6.09,4.29,3.39,1.79,0],
				fill: false,
				borderColor: '#089ce9',
				tension: 0.1
			},
		]
		}
	
		var chartInstanceMlPoint = new Chart(ctxMLPoint, {
			type: "line",
			data: data
		});

			//Grafico ML con QR
			var ctxMLQR = document.getElementById('comisionesMLQR').getContext('2d');

			const labelsMLQR = ['En el momento.', '10 días de aprobado a liquidar.', '18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.','70 días de aprobado a liquidar.'];
			data = {
				labels: labelsMLQR,
				datasets: [{
					label: 'Con dinero disponible de Mercado Pago.',
					data: [0.8,,,,,,],
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				},
				{
					label: 'Con Mercado Crédito.',
					data: [0.8,,,,,,],
					fill: false,
					borderColor: '#20bcb1',
					tension: 0.1
				},
				{
					label: 'Con tarjeta de débito.',
					data: [0.85,,,,,,],
					fill: false,
					borderColor: '##0f5e59',
					tension: 0.1
				},
				{
					label: 'Con tarjeta de crédito.',
					data: [6.39, 4.29, 2.99, 1.49, 1.79, 0],
					fill: false,
					borderColor: '#080e0e',
					tension: 0.1
				}]
			}
		
			var chartInstanceMLQR = new Chart(ctxMLQR, {
				type: "line",
				data: data
			});
	



	// Comisiones MODO
	var ctxModo= document.getElementById('comisionesModo').getContext('2d');
	const labelsModo = ['En el momento.', 'Al momento de liquidar.'];
	data = {
		labels: labelsModo,
		datasets: [{
			label: 'Uso de plataforma - Codigo QR',
			data: [0.00, 0.00],
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		}]
	}

	var chartInstancePoint = new Chart(ctxModo, {
		type: "line",
		data: data
	});

	//Grafico con Mobex
	/* 			var ctxMobex = document.getElementById('comisionesMobex').getContext('2d');
				const labelsMobex = ['5 días de aprobado a liquidar.'];
					data = {
					labels: labelsMobex,
					datasets: [{
						label: 'Costo de comision a liquidar en dias. Tarjeta de débito, credito y efectivo.',
						data: [5.00],
						fill: false,
						backgroundColor: ["purple"],
						tension: 0.1
					},
				]}
			
			 var chartInstanceMobex = new Chart(ctxMobex, {
					type: "bar",
					data: data
				});
 */
	//Grafico con PAGO360
	 var ctxPago360 = document.getElementById('comisionesPago360').getContext('2d');
							const labelsPago360 =  ['Innmediato'];
								data = {
								labels: labelsPago360,
								datasets: [{
									label: 'Con todos los medios de pago aceptados',
									data: [3.75,3.75],
									fill: false,
									borderColor: 'rgb(75, 192, 192)',
									backgroundColor: "blue",
									tension: 0.1
								},
								
							]}
						
						 var chartInstancePago360 = new Chart(ctxPago360, {
								type: "line",
								data: data
							});


		//Grafico con Mobbex
		var ctxMobbex = document.getElementById('comisionesMobbex').getContext('2d');
		const labelsMobbex =  ['Innmediato'];
			data = {
			labels: labelsMobbex,
			datasets: [{
				label: 'Con todos los medios de pago aceptados',
				data: [4,4],
				fill: false,
				borderColor: '#7000ff',
				backgroundColor: "blue",
				tension: 0.1
			},
			
		]}
	
	 var chartMobbex = new Chart(ctxMobbex, {
			type: "line",
			data: data
		});


		//Grafico con MercadoLibre Chile
		var ctxMlChile = document.getElementById('comisionesMercadoPagoChile').getContext('2d');
		const labelsMlChile =  ['En el momento', '14 dias después del pago aprovado'];
			data = {
			labels: labelsMlChile,
			datasets: [{
				label: 'Con todos los medios de pago aceptados',
				data: [2.95,2.79],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: "blue",
				tension: 0.1
			},
			
		]}
	
		var chartMlChile = new Chart(ctxMlChile, {
			type: "line",
			data: data
		});


		//Kushki
		var ctxMlKushki = document.getElementById('comisionesKushki').getContext('2d');
		const labelsKushki =  ['0 días', '30 dias'];
			data = {
			labels: labelsKushki,
			datasets: [{
				label: 'Con todos los medios de pago aceptados + IVA (DOLARES)',
				data: [260,260],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: "blue",
				tension: 0.1
			},
			
		]}
	
		var chartMlChile = new Chart(ctxMlKushki, {
			type: "line",
			data: data
		});



	//Grafico ML con tienda online y link de cobro
	var ctxCompartivaML = document.getElementById('comisionesComparativaML').getContext('2d');

	const labelsCoparativaML = ['En el momento.', '10 días de aprobado a liquidar.', '18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.'];
	data = {
		labels: labelsCoparativaML,
		datasets: [{
				label: 'Costo de comision Mercado Pago Argentina',
				data: [6.39, 4.29, 3.39, 1.79],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			},
			{
				label: 'Costo de comision MODDO',
				data: [0, 0, 0, 0],
				fill: false,
				borderColor: '#7000ff',
				tension: 0.1
			},
		]
	}

	var chartInstanceComparativaML = new Chart(ctxCompartivaML, {
		type: "line",
		data: data
	});

	//Grafico Modo con tienda online y link de cobro
	var ctxCompartivaMODO = document.getElementById('comisionesComparativaMODO').getContext('2d');

	const labelsCoparativaMODO = ['En el momento.', 'Al momento de liquidar'];
	data = {
		labels: labelsCoparativaMODO,
		datasets: [{
				label: 'Costo de comision Mercado Pago Argentina',
				data: [6.39, 4.29, 3.39, 1.79],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			},
			{
				label: 'Costo de comision MODDO',
				data: [0, 0, 0, 0],
				fill: false,
				borderColor: '#7000ff',
				tension: 0.1
			}
		]
	}

	var chartInstanceComparativaMODO = new Chart(ctxCompartivaMODO, {
		type: "line",
		data: data
	});


	//grafico de barras stacked

	var data = [{
		label: 'chats conectados en menos de 20 min',
		borderWidth: 2,
		backgroundColor: '#95C7F2',
		data: [12680000]
	}, {
		label: 'contestados en menos de 3 min',
		borderWidth: 2,
		backgroundColor: '#75447C',
		data: [8230000]
	}, {
		label: 'contestado en mas de 60min',
		backgroundColor: '#F18056',
		data: [6010000]
	}];

	var options = {


		legend: {
			display: false
		},
		responsive: true,
		tooltips: {
			mode: 'index'
		},

		scales: {
			xAxes: [{
				stacked: true,
			}],
			yAxes: [{
				stacked: true
			}],

		}

	};


	// var barrasStacked = document.getElementById('hBar').getContext('2d');

	// var myChart = new Chart(barrasStacked, {
	// 	type: 'horizontalBar',
	// 	data: {

	// 		datasets: data
	// 	},
	// 	options: options
	// });

	//grafico de barras normal

	// new Chart(document.getElementById("bar-chart"), {
	// 	type: 'bar',
	// 	data: {
	// 		labels: ["WebChat", "Whatsapp", "Facebook", "Twitter", "Instagram"],
	// 		datasets: [{

	// 			backgroundColor: ["#F07C39", "#90D980", "#4177CD", "#9AC7F0", "#DA9539"],
	// 			data: [3450, 6500, 4067, 1900, 2100]
	// 		}]
	// 	},
	// 	options: {
	// 		legend: {
	// 			display: false
	// 		},
	// 	}
	// });


	//grafico de donuts

	// ctxDonut = document.getElementById('ctxDonut').getContext('2d');
	// chart = new Chart(ctxDonut, {
	// 	type: 'doughnut',
	// 	data: {
	// 		segmentStrokeWidth: 20,
	// 		segmentStrokeColor: "rgba(255, 255, 6, 0.4)",
	// 		datasets: [{
	// 			label: 'Colors',
	// 			data: [9, 8, 7, 6, 5, 4],
	// 			backgroundColor: ['rgb(240, 122, 57)', 'rgb(243, 149, 81)',
	// 				'rgb(241, 164, 107)', 'rgb(247, 189, 147)',
	// 				'rgb(245, 175, 123)',
	// 				'rgb(248, 203, 169)'
	// 			]
	// 		}],
	// 		labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
	// 	},
	// 	options: {
	// 		legend: {
	// 			display: false
	// 		},
	// 		cutoutPercentage: 80,
	// 		responsive: true,
	// 		title: {
	// 			display: true,
	// 			text: "Color test"
	// 		}
	// 	}
	// });

	// This is "probably" IE9 compatible but will need some fallbacks for IE8
	// - (event listeners, forEach loop)

	// wait for the entire page to finish loading
	window.addEventListener('load', function () {

		// setTimeout to simulate the delay from a real page load
		setTimeout(lazyLoad, 1000);

	});

	function lazyLoad() {
		var card_images = document.querySelectorAll('.card-image');

		// loop over each card image
		card_images.forEach(function (card_image) {
			var image_url = card_image.getAttribute('data-image-full');
			var content_image = card_image.querySelector('img');

			// change the src of the content image to load the new high res photo
			content_image.src = image_url;

			// listen for load event when the new photo is finished loading
			content_image.addEventListener('load', function () {
				// swap out the visible background image with the new fully downloaded photo
				card_image.style.backgroundImage = 'url(' + image_url + ')';
				// add a class to remove the blur filter to smoothly transition the image change
				card_image.className = card_image.className + ' is-loaded';
			});

		});

	}
})