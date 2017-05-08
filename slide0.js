//slide0.js


//presentation
present = mathbox.present({
  index: 0
});

	var h = 0.3;
	var p0 = [0.5,0.5];

	var firstIteration = [p0[0] + h, p0[1] + h * f(p0[0],p0[1])]

slide1 = present.slide({from: 1, to: 50}).reveal()
    // Add some data
      .volume({
        expr: function (emit, x, y, i, j, t) {
			emit(x,y);
			emit(x + h, y + h * f(x,y))
        },
        width: 10,
        height: 10,
        channels: 2,
		items: 2,
      }).vector({
        end: true,
        width: 5,
        color: blue,
      });

	var functionlabel = view.text({
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

present.slide()
      .volume({
        expr: function (emit, x, y, i, j, t) {
			emit(p0[0],p0[1]);
			emit(firstIteration[0],firstIteration[1])
        },
        channels: 2,
		items: 2,
      }).vector({
        end: true,
        width: 5,
        color: deeperblue,
      }).point({
		size: 10,
        zIndex: 1,
        color: deeperblue,
      }).text({
        data: ['x_0','x_f?'],
      })
      .label({
        color: 'black',
        zIndex: 1,
      });
/*
present.slide().step({trigger: 3})
      .volume({
        expr: function (emit, x, y, i, j, t) {
			emit(0,0);
			emit(firstIteration[0],firstIteration[1])
        },
        channels: 2,
		items: 2,
      }).vector({
        end: true,
        width: 5,
        color: deeperblue,
      })*/
