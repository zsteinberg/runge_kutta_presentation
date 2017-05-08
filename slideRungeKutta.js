


present.slide().reveal() //slide 11: time to shine! k1
	
	 .array({
        data: [
			p0,
			oneLinearIteration(p0,rungeKuttaH/2),
        ],
        channels: 2,
		items: 2,
      })
		.vector({
        end: true,
        width: 5,
        color: blue,
      })
	//point p1
	.array({
		    data: [
				oneLinearIteration(p0,rungeKuttaH/2),
		    ],
		    channels: 2,
			items: 1,
		  })
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  })

	//k0
	.transform({
      scale: [0, 1],
      position: [0, 0],
    }).point({
			size: 15,
		    zIndex: 1,
		    color: green,
		  }).text({
		    data: ['k_1'], //not showing x_f
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  }).end()
