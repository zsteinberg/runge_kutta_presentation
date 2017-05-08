//slideRungeKutta.js: contaning slides after 11

	//var rungeKuttaH declared before

/*
	function oneLinearIteration(p0, h){
		return [p0[0] + h, p0[1] + h * f(p0[0],p0[1])]
	}*/
	var p0 = [0.5,0.5];

    var k_1 = rungeKuttaH * f(p0[0],p0[1])
	var k_2 = rungeKuttaH * f(p0[0]+rungeKuttaH/2,p0[1] + k_1* rungeKuttaH/2)
	var k_3 = rungeKuttaH * f(p0[0]+rungeKuttaH/2,p0[1] + k_2* rungeKuttaH/2)
	var k_4 = rungeKuttaH * f(p0[0]+rungeKuttaH  ,p0[1] + k_3* rungeKuttaH)

	var s1 = p0
	var s2 = [p0[0]+rungeKuttaH/2,p0[1] + k_1* rungeKuttaH/2]
	var s3 = [p0[0]+rungeKuttaH/2,p0[1] + k_2* rungeKuttaH/2]
	var s4 = [p0[0]+rungeKuttaH ,p0[1] + k_3* rungeKuttaH];

	var p1 = oneLinearIteration(s1,rungeKuttaH/2) // the point at the end of k_1
	var p2 = oneLinearIteration(s2,rungeKuttaH/2)
	var p3 = oneLinearIteration(s3,rungeKuttaH/2)
	var p4 = oneLinearIteration(s4,rungeKuttaH/2)

	//vectors go from s_n to p_n

	function scalarMult(vec,n){
		var vec2 = [];
		for(var i=0;i<vec.length;vec++){
			vec2.push(vec[i] * n)
		}
		return vec2;

	}

	

present.slide({to: 20}).reveal() //slide 11: time to shine! k1
	
	 .array({
        data: [
			s1,
			p1,
        ],
        channels: 2,
		items: 2,
      }).play({
              script: [
                [{data: [s1,s1]}],
                [{data: [s1,p1]}],
              ]
		})
		.vector({
        end: true,
        width: 5,
        color: blue,
      })
	//point p1
	.array({
		    data: [
				p1,
		    ],
		    channels: 2,
			items: 1,
		  }).play({
              script: [
                [{data: [s1]}],
                [{data: [p1]}],
              ]
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
    }).play({ delay: 1,
              script: [
                [{scale: [1,1]}],
                [{scale: [0,1]}],
              ]
		}).point({
			size: 15,
		    zIndex: 1,
		    color: green,
		  }).text({
		    data: ['k_1'], //not showing x_f
		  }).label({
		    color: 'black',
		    zIndex: 1,
		  }).end()


present.slide({to: 20}).reveal() //slide 12: time to shine! k2
	
	 .array({
        channels: 2,
		items: 2,
      }).play({
              script: [
                [{data: [s2,s2]}],
                [{data: [s2,p2]}],
              ]
		})
		.vector({
        end: true,
        width: 5,
        color: blue,
      })
	//point p2
	.array({
		    channels: 2,
			items: 1,
		  }).play({
              script: [
                [{data: [s2]}],
                [{data: [p2]}],
              ]
		})
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  })

	//k2
	.transform({
      scale: [0, 1],
      position: [0, 0],
    }).play({ delay: 1,
              script: [
                [{scale: [1,1]}],
                [{scale: [0,1]}],
              ]
		}).point({
			size: 15,
		    zIndex: 1,
		    color: green,
		  }).text({
		    data: ['k_2'], //not showing x_f
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  }).end()


present.slide({to: 20}).reveal() //slide 13: k3
	
	 .array({
        channels: 2,
		items: 2,
      }).play({
              script: [
                [{data: [s3,s3]}],
                [{data: [s3,p3]}],
              ]
		})
		.vector({
        end: true,
        width: 5,
        color: blue,
      })
	//point p3
	.array({
		    channels: 2,
			items: 1,
		  }).play({
              script: [
                [{data: [s3]}],
                [{data: [p3]}],
              ]
		})
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  })

	//k3
	.transform({
      scale: [0, 1],
      position: [0, 0],
    }).play({ delay: 1,
              script: [
                [{scale: [1,1]}],
                [{scale: [0,1]}],
              ]
		}).point({
			size: 15,
		    zIndex: 1,
		    color: green,
		  }).text({
		    data: ['k_3'], //not showing x_f
		  }).label({
		    color: 'black',
		    zIndex: 1,
		  }).end()


present.slide({to: 20}).reveal() //slide 13: k4
	
	 .array({
        channels: 2,
		items: 2,
      }).play({
              script: [
                [{data: [s4,s4]}],
                [{data: [s4,p4]}],
              ]
		})
		.vector({
        end: true,
        width: 5,
        color: blue,
      })
	//point p4
	.array({
		    channels: 2,
			items: 1,
		  }).play({
              script: [
                [{data: [s4]}],
                [{data: [p4]}],
              ]
		})
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  })

	//k4
	.transform({
      scale: [0, 1],
      position: [0, 0],
    }).play({ delay: 1,
              script: [
                [{scale: [1,1]}],
                [{scale: [0,1]}],
              ]
		}).point({
			size: 15,
		    zIndex: 1,
		    color: green,
		  }).text({
		    data: ['k_4'], //not showing x_f
		  }).label({
		    color: 'black',
		    zIndex: 1,
		  }).end()

//slide 14: move the arrows back-to-back
