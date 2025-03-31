	
	// show and hide sleep cycle based on input value
	document.getElementById('sleepCycles').addEventListener('change', function() {
	document.getElementById('customCyclesGroup').style.display = 
	this.value === 'custom' ? 'block' : 'none';
	});

	function calculateSleepTimes() {
		// Get input values
		const wakeupTimeStr = document.getElementById('wakeupTime').value;
		const snoozeCount = parseInt(document.getElementById('snoozeCount').value);

		// Get sleep cycles
		let sleepCycles;
		const sleepCyclesSelect = document.getElementById('sleepCycles').value;
		if (sleepCyclesSelect === 'custom') {
			sleepCycles = parseInt(document.getElementById('customCycles').value);
		} else {
			sleepCycles = parseInt(sleepCyclesSelect);
	}
		
		// Set Constants value/time for each opt
			const CYCLE_MINUTES = 90;
			const FALL_ASLEEP_MINUTES = 15;
			const SNOOZE_MINUTES = 9;