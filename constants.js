	//the diffeq we're looking at: y' = f(x,y)
	function f(x,y){
		return x*x*y;
	}
	var e = 2.71828;
	var sqrtE = 1.648721271;
	function actual_diffeq_solution(x){
		//the actual solution

		/*
		dy/y = x^2 dx
		ln y = x^3/3 + c
		y = e^(x^3/3) e^c

		For the solution at p0, where f(0.5) = 0.5,

		0.5 = c e^(1/24)*/
		var c = 0.479595;
		

		return c*Math.pow(e, x*x*x/3);

	}

	function taylor_approximation(x){

	// f = c e^(x^3/3)
	// f' = c x^2 e^(x^3/3)
	// f'' = c e^(x^3/3) x (x^3 + 2)

	//f(0.5) = 0.5
	//f'(0.5) = 0.260637c
	//f''(0.5) = c* 1.10771
	var c = 0.479595;
	return 0.5 + x*0.260637/1 + x*x * c * 1.10771/2
	}

	var green = '#50A000'
deepred = new THREE.Color(0xa00000);

deeperred = new THREE.Color(0x800000);

deeperblue = new THREE.Color(0x000080);

red = new THREE.Color(0xC02050);

blue = new THREE.Color(0x3090FF);
