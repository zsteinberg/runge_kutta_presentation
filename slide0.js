//slide0.js - slides 0-10, talking about different methods


//presentation
present = mathbox.select("cartesian").present({
  index: 0
});
	var p0 = [0.5,0.5];

	function oneLinearIteration(p0, h){ //follow a derivative a certain x-distance and return the point at the end.
		return [p0[0] + h, p0[1] + h * f(p0[0],p0[1])]
	}

	var firstIteration = oneLinearIteration(p0,0.3)
	var longFirstOrderGuess = oneLinearIteration(p0,0.75); // a terrible rough guess
	var longTaylorSeriesGuess = [p0[0]+0.75,taylor_approximation(p0[0]+0.75)]

	var arrowPlotH = 0.3;

	var rungeKuttaH = 0.75;

slide1 = present.slide({from: 1, to: 50}).reveal()
    // Add some data
      .volume({
        expr: function (emit, x, y, i, j, t) {
			emit(x,y);
			emit(x + arrowPlotH, y + arrowPlotH * f(x,y))
        },
        width: 10,
        height: 10,
        channels: 2,
		items: 2,
      }).vector({
        end: true,
        width: 5,
        color: blue,
        opacity: 1,
      }).play({ from: 5,
              script: [
                [{opacity: 0.2}],
              ]
		})
	.text({
        data: ['f(x) = x^2y'],
      })
      .label({
        offset: [0, 140],
        zIndex: 1,
        color: 'black',
      });

//show p0
present.slide() //slide 1
present.slide({to: 20}).reveal() //slide 2 - show point x_0,y_0
      .volume({
        expr: function (emit, x, y, i, j, t) {
			emit(p0[0],p0[1]);
        },
        channels: 2,
		items: 1,
      }).point({
		size: 15,
        zIndex: 1,
        color: deeperblue,
      }).text({
        data: ['(x_0, y_0)'],
      })
      .label({
        color: 'black',
        zIndex: 1,
      })

	.transform({ //points on axes
      position: [0, 0],
    }).play({
			script: [
			[{scale: [1, 1]}],
			[{scale: [0, 1]}],
			]
    }).point({
			size: 15,
		    zIndex: 1,
		    color: green,
	}).play({
              script: [
                [{opacity: 0}],
                [{opacity: 1}],
              ]
	}).text({
		    data: ['y_0'],
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  }).play({
              script: [
                [{opacity: 0}],
                [{opacity: 1}],
              ]
	}).end()

	.transform({
      position: [0, 0],
    }).play({
              script: [
                [{scale: [1, 1]}],
                [{scale: [1, 0]}],
              ]
    }).point({
			size: 15,
		    zIndex: 1,
		    color: green,
	}).play({
              script: [
                [{opacity: 0}],
                [{opacity: 1}],
              ]
	}).text({
		    data: ['x_0'],
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  }).play({
              script: [
                [{opacity: 0}],
                [{opacity: 1}],
              ]
	}).end()

	.array({ //dot for x_0 + h
		    data: [
				[p0[0]+rungeKuttaH,0],
		    ],
		    channels: 2,
			items: 1,
		  }).play({
              script: [
				[{data: [p0[0],0]}],
                [{data: [p0[0],0]}],
                [{data: [p0[0]+rungeKuttaH,0]}],
              ]
	})
		  .point({
			size: 15,
		    zIndex: 1,
		    color: green,
		  }).play({
              script: [
                [{opacity: 0}],
                [{opacity: 0}],
				[{opacity: 1}],
              ]
	}).text({
		    data: ['x_0 + h'],
		  })
		  .label({
		    color: 'green',
		    zIndex: 1,
		  }).play({
              script: [
                [{opacity: 0}],
                [{opacity: 0}],
				[{opacity: 1}],
              ]
	})

present.slide({from: 3, to: 5}).reveal() //slide 3, which stays present until 5
	.array({ //dot at end of arrow
		    data: [
				longFirstOrderGuess,
		    ],
		    channels: 2,
			items: 1,
		  })
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  }).text({
		    data: ['x_f? (first-order)'], //not showing x_f
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  })

		.transform({ //point on y-axis
		  scale: [0, 1],
		  position: [0, 0],
		}).play({ delay: 0.5,
              script: [
                [{scale: [1,1]}],
                [{scale: [0,1]}],
              ]
		}).point({
				size: 15,
				zIndex: 1,
				color: green,
			  }).play({ delay: 0.5,
              script: [
                [{opacity: 0}],
                [{opacity: 1}],
              ]
		}).text({
				data: ['y_f? (first-order)'],
			  })
			  .label({
				color: 'black',
				zIndex: 1,
			  }).end()

	 .array({ // arrow
        data: [
			p0,
			longFirstOrderGuess,
        ],
        channels: 2,
		items: 2,
      })
		.vector({
        end: true,
        width: 5,
        color: blue,
      })

present.slide().reveal() // slide 4
      .group().interval({ //line
		width: 50,
        expr: function (emit, x, i, t) {
			emit(x,actual_diffeq_solution(x));
        },
        channels: 2,
      }).line({
        width: 10,
        color: blue,
      }).end()

	 .array({ // //point on y-axis
        data: [
			[p0[0]+rungeKuttaH,actual_diffeq_solution(p0[0]+rungeKuttaH)],
        ],
        channels: 2,
		items: 1,
      }).point({
		size: 15,
		zIndex: 1,
		color: blue
	}).transform({
		  scale: [0, 1],
		  position: [0, 0],
		}).play({ delay: 0.5,
              script: [
                [{scale: [1,1]}],
                [{scale: [0,1]}],
              ]
		}).point({
		size: 15,
		zIndex: 1,
		color: green,
	  }).text({
		data: ['y_f'],
	  })
	  .label({
		color: 'black',
		zIndex: 1,
	  }).play({ delay: 0.5,
              script: [
                [{opacity: 0}],
                [{opacity: 1}],
              ]
		}).end()

present.slide({from: 5, to: 6}).reveal() // slides 5 and 6, with a taylor series
      .interval({
		width: 50,
        expr: function (emit, x, i, t) {
			emit(x,taylor_approximation(x));
        },
        channels: 2,
      }).line({
        width: 10,
        color: deeperblue,
      })
		//points
		.array({
		    data: [
				longTaylorSeriesGuess,
		    ],
		    channels: 2,
			items: 1,
		  })
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  }).text({
		    data: ['p_f? (taylor series)'], //not showing x_f
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  })

present.slide() //slide 7: an introduction to the runge-kutta
present.slide() //slide 8: definition
present.slide() //slide 9: definition, cont.
present.slide() //slide 10: definition, cont.

