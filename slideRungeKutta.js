//slideRungeKutta.js: contaning slides after 11

	//var rungeKuttaH declared before

/*
	function oneLinearIteration(p0, h){
		return [p0[0] + h, p0[1] + h * f(p0[0],p0[1])]
	}*/
	var p0 = [0.5,0.5];

    var k_1 = rungeKuttaH * f(p0[0],p0[1])
	var k_2 = rungeKuttaH * f(p0[0]+rungeKuttaH/2,p0[1] + k_1/2)
	var k_3 = rungeKuttaH * f(p0[0]+rungeKuttaH/2,p0[1] + k_2/2)
	var k_4 = rungeKuttaH * f(p0[0]+rungeKuttaH  ,p0[1] + k_3)

	var s1 = [p0[0]              ,p0[1]];
	var s2 = [p0[0]+rungeKuttaH/2,p0[1] + k_1/2]
	var s3 = [p0[0]+rungeKuttaH/2,p0[1] + k_2/2]
	var s4 = [p0[0]+rungeKuttaH  ,p0[1] + k_3];

	var p1 = oneLinearIteration(s1,rungeKuttaH/2) // the point at the end of k_1
	var p2 = oneLinearIteration(s2,rungeKuttaH/2)
	var p3 = oneLinearIteration(s3,rungeKuttaH/2)
	var p4 = oneLinearIteration(s4,rungeKuttaH/2)

	//p2[1] = s2[0] + h/2, s2[1] + h/2 * f(s2[0],s2[1])
	//s3 =    p0[0] + h/2, p0[1] + h/2 f(s2[0],s1[0])

	//vectors go from s_n to p_n

	function vecscale(vec,n){
		var vec2 = [];
		for(var i=0;i<vec.length;i++){
			vec2.push(vec[i] * n)
		}
		return vec2;

	}

	function vecsub(a,b){ //a-b
		var vec2 = [];
		for(var i=0;i<a.length;i++){
			vec2.push(a[i]-b[i])
		}
		return vec2;

	}


	function vecadd(a,b){ //a+b
		var vec2 = [];
		for(var i=0;i<a.length;i++){
			vec2.push(a[i]+b[i])
		}
		return vec2;

	}

	

present.slide({to: 15}).reveal() //slide 11: time to shine! k1
	
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


present.slide({to: 15}).reveal() //slide 12: time to shine! k2
	
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


		//explain vector
	.array({
        channels: 2,
		items: 2,
      }).play({ delay: 2,
              script: [
                [{data: [p2,p2]}],
                [{data: [[p2[0],p1[1]],p2]}], //extend downwards
				[{data: [[p2[0],p0[1]],[p2[0],p2[1]-p1[1]+p0[1]]]}], //move down
				[{data: [[p1[0],p0[1]],[p1[0],p2[1]-p1[1]+p0[1]]]}], //slide left to x=x_0+h/2
              ]
		})
		.vector({
        end: true,
        width: 5,
        color: green,
      })

	.array({
		    channels: 2,
			items: 1,
			data: [s3],
		  })
		  .point({
			size: 15,
		    zIndex: 1,
		    color: deeperblue,
		  }).play({ delay: 2,
              script: [
                [{opacity: 0}],
                [{opacity: 0}],
				[{opacity: 0}],
				[{opacity: 1}],
              ]
		})

present.slide({to: 15}).reveal() //slide 13: k3
	
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

present.slide({to: 15}).reveal() //slide 13: k4
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

var diffs = [vecsub(p1,s1),vecsub(p2,s2),vecsub(p3,s3),vecsub(p4,s4)]

function vecpairadd(a,b){
	return [a,vecadd(a,b)]
}

var zero = [0,0]

var final_addition = [vecpairadd(zero,diffs[0]),vecpairadd(zero,diffs[1]),vecpairadd(zero,diffs[2]),vecpairadd(zero,diffs[3]),vecpairadd(s2,vecadd(diffs[1],diffs[2]))]
[vecpairadd(zero,diffs[0]),vecpairadd(zero,diffs[1]),vecpairadd(zero,diffs[2]),vecpairadd(zero,diffs[3]),vecscale(vecpairadd(s2,vecadd(diffs[1],diffs[2])),1/2)]

var avg_of_two_pls_3 = vecadd(vecadd(s2,vecscale(diffs[1],1/2)),vecscale(diffs[2],1/2));

function tip_to_toe(vectorlist,start){
	var vec2 = [];
	var current_tip = start ? start.concat() : [0,0];
	for(var i=0;i<vectorlist.length; i += 2){
		var diff = vecsub(vectorlist[i+1],vectorlist[i]);
		var newhead = vecadd(current_tip, diff)
		
		vec2.push(current_tip)
		vec2.push(newhead)
		current_tip = newhead;
	}
	return vec2;
}

var normal_list = [s1,vecadd(s1,diffs[0]),s2,vecadd(s2,diffs[1]),p2,vecadd(p2,diffs[2]),s4,vecadd(s4,diffs[3])];
var scaled_list = [s1,vecadd(s1,vecscale(diffs[0],1/6)),s2,vecadd(s2,vecscale(diffs[1],1/3)),s3,vecadd(s3,vecscale(diffs[2],1/2)),s4,vecadd(s4,vecscale(diffs[3],1/3))]


present.slide({to: 15}).reveal()

	.array({
		data: [p0,p4],
        channels: 2,
		items: 2,
      })
	.play({
        script: [
                [{data: [p0,p0]}],
				[{data: [p0,[p0[0]+rungeKuttaH, p0[1] + 1/6*k_1 + 1/3 * k_2 + 1/3 * k_3 + 1/6 * k_4]]}],
              ]
		})
		.vector({
        end: true,
        width: 5,
        color: green,
      })


present.slide().reveal()

	.array({
		data: [[p0[0]+rungeKuttaH,actual_diffeq_solution(p0[0]+rungeKuttaH)],longFirstOrderGuess,longTaylorSeriesGuess,[p0,[p4[0], p0[1] + 1/6*k_1 + 1/3 * k_2 + 1/3 * k_3 + 1/6 * k_4]]

			],
        channels: 2,
		items: 1,
      }).point({
			size: 15,
		    zIndex: 1,
		    color: green,
      }).text({
		    data: ['actual y_f','first-order','taylor series','runge-kutta'], //not showing x_f
		  })
		  .label({
		    color: 'black',
		    zIndex: 1,
		  })
