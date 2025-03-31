	
	// show and hide sleep cycle based on input value
	document.getElementById('sleepCycles').addEventListener('change', function() {
	document.getElementById('customCyclesGroup').style.display = 
	this.value === 'custom' ? 'block' : 'none';
	});