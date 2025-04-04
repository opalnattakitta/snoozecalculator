
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

		// Calculation Results for wake-up time schedule
		const [wakeupHours, wakeupMinutes] = wakeupTimeStr.split(':').map(num => parseInt(num));
		let wakeupTime = new Date();
		wakeupTime.setHours(wakeupHours, wakeupMinutes, 0, 0);

		// Calculate total snooze time (no. of snooze count multiple 9min)
		const totalSnoozeMinutes = snoozeCount * SNOOZE_MINUTES;

		// Calculate alarm time (wake-up time minus plus total snooze time)
		let alarmTime = new Date(wakeupTime);
		alarmTime.setMinutes(alarmTime.getMinutes() - totalSnoozeMinutes);
		
		// Calculate bedtime (alarm time minus sleep cycles minus fall asleep time)
		let bedtime = new Date(alarmTime);
		const totalSleepMinutes = (sleepCycles * CYCLE_MINUTES) + FALL_ASLEEP_MINUTES;
		bedtime.setMinutes(bedtime.getMinutes() - totalSleepMinutes);

		// Display results
		document.getElementById('bedtime').textContent = formatTime(bedtime);
		document.getElementById('alarmTime').textContent = formatTime(alarmTime);
		document.getElementById('finalWakeup').textContent = formatTime(wakeupTime);
		
		// Show explanation
		document.getElementById('calculation').textContent = 
			`Based on ${sleepCycles} sleep cycles (${sleepCycles * CYCLE_MINUTES} minutes), ` +
			`${FALL_ASLEEP_MINUTES} minutes to fall asleep, and ${snoozeCount} snoozes ` +
			`(${totalSnoozeMinutes} minutes total).`;
		
		// Show results section
		document.getElementById('results').style.display = 'block';
	}

		function formatTime(date) {
			let hours = date.getHours();
			let minutes = date.getMinutes();
			const ampm = hours >= 12 ? 'PM' : 'AM';
			
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			minutes = minutes < 10 ? '0' + minutes : minutes;
			
			return `${hours}:${minutes} ${ampm}`;
		}