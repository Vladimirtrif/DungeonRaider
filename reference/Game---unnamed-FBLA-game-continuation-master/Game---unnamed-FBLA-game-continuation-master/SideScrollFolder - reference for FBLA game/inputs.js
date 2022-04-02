		// Keys Pressed
		var upArrowPressed = false;
		var downArrowPressed = false;
		var leftArrowPressed = false;
		var rightArrowPressed = false;
		var spacePressed = false;
		var qPressed = false;
		var aPressed = false;



		document.body.addEventListener("keydown", function(e) {
			
		    switch (e.which) {
		        case 81: qPressed = true; break; // up arrow
		        case 65: aPressed = true; break; // up arrow
		        case 32: spacePressed = true; break;
		        case 37:  leftArrowPressed = true; break; // left arrow
		        case 38: upArrowPressed = true; break; // up arrow
		        case 39: rightArrowPressed =true; break; // right arrow
		        case 40: downArrowPressed = true; break; // down arrow
		    }
		});

		document.body.addEventListener("keyup", function(e) {
		    switch (e.which) {
		    	case 81: qPressed = false; break; // up arrow
		        case 65: aPressed = false; break; // up arrow
		        case 32: spacePressed = false; break;
		        case 37:  leftArrowPressed = false; break; // left arrow
		        case 38: upArrowPressed = false; break; // up arrow
		        case 39: rightArrowPressed = false; break; // right arrow
		        case 40: downArrowPressed = false; break; // down arrow
		    }
		});