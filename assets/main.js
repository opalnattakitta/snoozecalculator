
	//Snooze Calculator Function Javascript//
	function calculateSleepTimes() {
		// Get input values
		const wakeupTimeStr = document.getElementById('wakeupTime').value;
		const snoozeCount = parseInt(document.getElementById('snoozeCount').value);
		const sleepCycles = parseInt(document.getElementById('sleepCycles').value);

		// Set Constants value for each 
		const CYCLE_MINUTES = 90;
		const FALL_ASLEEP_MINUTES = 15;
		const SNOOZE_MINUTES = 9;

		// Calculate total snooze time (no. of snooze count multiple 9min)
		const totalSnoozeMinutes = snoozeCount * SNOOZE_MINUTES;

		// Calculate alarm time (wake-up time minus plus total snooze time)
		let alarmTime = new Date(wakeupTime);
		alarmTime.setMinutes(alarmTime.getMinutes() - totalSnoozeMinutes);
		