//slide0.js


//presentation
present = mathbox.select("cartesian").present({
  index: 0
});

	var h = 0.5;
	var p0 = [0.5,0.5];

	function oneLinearIteration(p0, h){
		return [p0[0] + h, p0[1] + h * f(p0[0],p0[1])]
	}
	var firstIteration = oneLinearIteration(p0,h)
	var longFirstOrderGuess = oneLinearIteration(p0,1); // a terrible rough guess

	var arrowPlotH = 0.3;

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
      })
	.text({
        data: ['f(x) = x^2y'],
      })
      .label({
        offset: [0, -140],
        zIndex: 1,
        color: 'black',
      });

//show first arrow
present.slide()
present.slide().reveal()
      .volume({
        expr: function (emit, x, y, i, j, t) {
			emit(p0[0],p0[1]);
        },
        channels: 2,
		items: 1,
      }).point({
		size: 10,
        zIndex: 1,
        color: deeperblue,
      }).text({
        data: ['x_0'],
      })
      .label({
        color: 'black',
        zIndex: 1,
      });

present.slide({from: 3, to: 5})
	.array({
		    data: [
				p0,
				longFirstOrderGuess,
		    ],
		    channels: 2,
			items: 1,
		  })
		  .point({
			size: 10,
		    zIndex: 1,
		    color: deeperblue,
		  }).text({
		    data: ['x_0','x_f?'], //not showing x_f
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  })
	 .array({
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
        color: deeperblue,
      })

present.slide().reveal()
      .interval({
		width: 50,
        expr: function (emit, x, i, t) {
			emit(x,actual_diffeq_solution(x));
        },
        channels: 2,
      }).line({
        width: 10,
        color: deeperblue,
      })

present.slide().reveal()
      .interval({
		width: 50,
        expr: function (emit, x, i, t) {
			emit(x,actual_diffeq_solution(x));
        },
        channels: 2,
      }).line({
        width: 10,
        color: deeperblue,
      })

present.slide().reveal()
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
