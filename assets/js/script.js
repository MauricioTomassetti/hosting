$('body').scrollspy({
    target: '#collapseEx2'
});
$(function(){

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
  

$(function(){


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

	const labels = ['En el momento.', '10 días de aprobado a liquidar.','18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.'];
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
		var ctxPoint = document.getElementById('comisionesMLPoint').getContext('2d');
		const labelsPoint = ['En el momento.', '10 días de aprobado a liquidar.','18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.'];
			data = {
			labels: labelsPoint,
			datasets: [{
				label: 'Tarjeta de débito.',
				data: [6.39, 4.29, 3.39, 1.79],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			},
			{
				label: 'Tarjeta de crédito.',
				data: [12.39, 8.29, 7.39, 1.79],
				fill: false,
				borderColor: 'rgb(47, 240, 127)',
				tension: 0.1
			},
		]
			}
	
	 var chartInstancePoint = new Chart(ctxPoint, {
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
							/* var ctxPago360 = document.getElementById('comisionesPago360').getContext('2d');
							const labelsPago360 =  ['Innmediato', '2 días hábiles.', '3 días hábiles.', '4 días hábiles.', '5 días hábiles.','14 días hábiles.'];
								data = {
								labels: labelsPago360,
								datasets: [{
									label: 'Debito Directo(CBU). DEBIN. Tarjeta de Débito(PEI).',
									data: [3.75],
									fill: false,
									borderColor: 'rgb(75, 192, 192)',
									backgroundColor: "blue",
									tension: 0.1
								},
								{
									label: 'Tarjeta de Débito.  Tarjeta de Crédito 2 o más Pagos',
									data: [0,3.75],
									fill: false,
									borderColor: 'rgb(47, 240, 127)',
									backgroundColor: "green",
									tension: 0.1
								},
								{
									label: 'Link Pagos (Red Link). Pago Mis Cuentas (Banelco). Cobro Express. Provincia Net Pagos',
									data: [0,0,3.75],
									fill: false,
									borderColor: 'rgb(47, 240, 127)',
									backgroundColor: "pink",
									tension: 0.1
								},
								{
									label: 'Rapipago',
									data: [0,0,0,3.75],
									fill: false,
									borderColor: 'rgb(47, 240, 127)',
									backgroundColor: "yellow",
									tension: 0.1
								},
								{
									label: 'Pago Fácil',
									data: [0,0,0,0,3.75],
									fill: false,
									borderColor: 'rgb(47, 240, 127)',
									backgroundColor: "red",
									tension: 0.1
								},
								{
									label: 'Tarjeta de Credito 1 Pago / Plan Z.',
									data: [0,0,0,0,0,3.75],
									fill: false,
									borderColor: 'rgb(47, 240, 127)',
									backgroundColor: "orange",
									tension: 0.1
								},
							]}
						
						 var chartInstancePago360 = new Chart(ctxPago360, {
								type: "bar",
								data: data
							}); */
					
		
	//Grafico ML con tienda online y link de cobro
	var ctxCompartivaML = document.getElementById('comisionesComparativaML').getContext('2d');

	const labelsCoparativaML = ['En el momento.', '10 días de aprobado a liquidar.','18 días de aprobado a liquidar.', '35 días de aprobado a liquidar.'];
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
		}]
		}

 var chartInstanceComparativaML = new Chart(ctxCompartivaML, {
		type: "line",
		data: data
	});

// ============================================
// As of Chart.js v2.7.0
// http://www.chartjs.org/docs
// ============================================

//grafico de lineas
/* var chart = document.getElementById("comisionesML").getContext("2d"),
	gradient = chart.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

var data = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	datasets: [
		{
			label: "Stock A",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "blue", // The main line color
			borderCapStyle: "square",
			borderDash: [], // try [5, 15] for instance
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "black",
			pointBackgroundColor: "white",
			pointBorderWidth: 1,
			pointHoverRadius: 8,
			pointHoverBackgroundColor: "white",
			pointHoverBorderColor: "blue",
			pointHoverBorderWidth: 2,
			pointRadius: 4,
			pointHitRadius: 10,
			// notice the gap in the data and the spanGaps: true
			data: [65, 59, 80, 81, 56, 55, 40, 39, 60, 55, 30, 78],
			spanGaps: true
		},
		{
			label: "Stock B",
			fill: true,
			lineTension: 0.1,
			backgroundColor: gradient,
			borderColor: "red",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "round",
			pointBorderColor: "black",
			pointBackgroundColor: "white",
			pointBorderWidth: 1,
			pointHoverRadius: 8,
			pointHoverBackgroundColor: "brown",
			pointHoverBorderColor: "yellow",
			pointHoverBorderWidth: 2,
			pointRadius: 4,
			pointHitRadius: 10,
			backgroundColor: "rgba(255, 255, 255, 0)",
			// notice the gap in the data and the spanGaps: false
			data: [10, 20, 60, 95, 64, 78, 90, 24, 70, 40, 70, 89],
			spanGaps: false
		}
	]
};

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: "easeInOutQuad",
		duration: 520
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					color: "rgba(290, 0, 200, 0.05)",
					lineWidth: 1
				}
			}
		],
		yAxes: [
			{
				gridLines: {
					color: "rgba(200, 200, 200, 0.08)",
					lineWidth: 1
				}
			}
		]
	},
	elements: {
		line: {
			tension: 1
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: "white"
	},
	tooltips: {
		titleFontFamily: "Open Sans",
		backgroundColor: "rgba(0,0,0,0.3)",
		titleFontColor: "blue",
		caretSize: 9,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};



var chartInstance = new Chart(chart, {
	type: "line",
	data: data,
	options: options
});

//grafico de donuts

ctx = document.getElementById('ctx').getContext('2d');
chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        segmentStrokeWidth: 20,
        segmentStrokeColor: "rgba(255, 255, 6, 0.4)",
        datasets: [{
            label: 'Colors',
            data: [9, 8, 7, 6, 5, 4],
            backgroundColor: ['rgb(240, 122, 57)',                  'rgb(243, 149, 81)',
 'rgb(241, 164, 107)',                  'rgb(247, 189, 147)', 
 'rgb(245, 175, 123)',
 'rgb(248, 203, 169)']
        }],
        labels: ['a','b','c','d','e','f','g','h','i']
    },
    options: {
      	legend: {
		display: false
	},
      cutoutPercentage: 80,
        responsive: true,
        title:{
            display: true,
            text: "Color test"
        }
    }
});
 */
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


    var barrasStacked = document.getElementById('hBar').getContext('2d');

    var myChart = new Chart(barrasStacked, {
        type: 'horizontalBar',
        data: {

            datasets: data
        },
        options: options
    });

//grafico de barras normal

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["WebChat", "Whatsapp", "Facebook", "Twitter", "Instagram"],
      datasets: [
        {

          backgroundColor: ["#F07C39", "#90D980","#4177CD","#9AC7F0","#DA9539"],
          data: [3450,6500,4067,1900,2100]
        }
      ]
    },
    options: {
      legend: { display: false },
    }
});


//grafico de donuts

ctxDonut = document.getElementById('ctxDonut').getContext('2d');
chart = new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
        segmentStrokeWidth: 20,
        segmentStrokeColor: "rgba(255, 255, 6, 0.4)",
        datasets: [{
            label: 'Colors',
            data: [9, 8, 7, 6, 5, 4],
            backgroundColor: ['rgb(240, 122, 57)',                  'rgb(243, 149, 81)',
 'rgb(241, 164, 107)',                  'rgb(247, 189, 147)', 
 'rgb(245, 175, 123)',
 'rgb(248, 203, 169)']
        }],
        labels: ['a','b','c','d','e','f','g','h','i']
    },
    options: {
      	legend: {
		display: false
	},
      cutoutPercentage: 80,
        responsive: true,
        title:{
            display: true,
            text: "Color test"
        }
    }
});

// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function() {
	
	// setTimeout to simulate the delay from a real page load
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop over each card image
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		// change the src of the content image to load the new high res photo
		content_image.src = image_url;
		
		// listen for load event when the new photo is finished loading
		content_image.addEventListener('load', function() {
			// swap out the visible background image with the new fully downloaded photo
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			// add a class to remove the blur filter to smoothly transition the image change
			card_image.className = card_image.className + ' is-loaded';
		});
		
	});
	
}









})

