var typed = new Typed("#element", {
	strings: [
		"Human Resource management",
		"Payroll processing",
		"Inventory management",
		"Time and Attendance",
	],
	typeSpeed: 100,
	backSpeed: 80,
	loop: true,
	showCursor: false,
});

let valueDisplays = document.querySelectorAll(
	".counter__objects .section__title span"
);
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.dataset.val);
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});
