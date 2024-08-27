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

let largeScreenNavs = document.querySelectorAll(".large-screen-nav");
largeScreenNavs.forEach((largeScreenNav) => {
	largeScreenNav.addEventListener("click", () => {
		let val = largeScreenNav.dataset.navSec;

		document.querySelector(".nav-current").classList.remove("nav-current");
		largeScreenNav.classList.add("nav-current");
		moveNavLine(val);

		let productPlaceHolder = document.querySelector(".large-screen-product");
		switch (val) {
			case "1":
				productPlaceHolder.innerHTML = productPayroll;
				break;

			case "2":
				productPlaceHolder.innerHTML = productPOS;
				break;

			case "3":
				productPlaceHolder.innerHTML = productTime;
				break;
		}
	});
});

function moveNavLine(section) {
	const navLine = document.querySelector(".nav-line");
	const position = (section - 1) * 33;
	navLine.style.setProperty("--line-position", position + "%");
}

const productPayroll = `
	<div class=large-screen-product>
				<div class="product-details-cont">
					<div class="product__image">
						<img
							class="first-image"
							src="./images/payplus-layout-2.PNG"
							alt=""
						/>
						<div class="second-image-container">
							<img
								class="second-image"
								src="./images/payplus-employee-details.PNG"
								alt=""
							/>
						</div>
					</div>
					<div class="product__content">
						<h2 class="product__content-title">
							Run your Payroll 10X faster, pay employees on time always.
						</h2>
						<p class="product__content-description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							natus placeat doloremque ab esse distinctio modi eaque tenetur
							libero delectus atque dignissimos ullam reiciendis blanditiis nisi
							maxime, necessitatibus cumque laborum.
						</p>
						<ul>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Accurate and fast processing</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Multi-country payroll</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Payroll for remote and local teams</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Tax compliance, EOR and PEO services</p>
							</li>
						</ul>
						<a href="" class="btn">Learn More</a>
					</div>
				</div>
			</div>
`;

const productPOS = `
	<div class=large-screen-product>
				<div class="product-details-cont">
					<div class="product__image">
						<img class="first-image" src="./images/POS-layout.PNG" alt="" />
						<div class="second-image-container">
							<img
								class="POS-second-image second-image"
								src="./images/POS-sale-entry.PNG"
								alt=""
							/>
						</div>
					</div>
					<div class="product__content">
						<h2 class="product__content-title">
							Effortless Transactions, Real-Time Insights, and Complete Control
							Over Your Business Operations
						</h2>
						<p class="product__content-description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							natus placeat doloremque ab esse distinctio modi eaque tenetur
							libero delectus atque dignissimos ullam reiciendis blanditiis nisi
							maxime, necessitatibus cumque laborum.
						</p>
						<ul>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Accurate and fast processing</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Multi-country payroll</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Payroll for remote and local teams</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Tax compliance, EOR and PEO services</p>
							</li>
						</ul>
						<a href="" class="btn">Learn More</a>
					</div>
				</div>
			</div>
`;

const productTime = `
	<div class=large-screen-product>
				<div class="product-details-cont">
					<div class="product__image">
						<img
							class="first-image"
							src="./images/payplus-layout-2.PNG"
							alt=""
						/>
						<div class="second-image-container">
							<img
								class="second-image"
								src="./images/payplus-employee-details.PNG"
								alt=""
							/>
						</div>
					</div>
					<div class="product__content">
						<h2 class="product__content-title">
							Take control of time management and give your employees the
							freedom to clock in and out from anywhere.
						</h2>
						<p class="product__content-description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							natus placeat doloremque ab esse distinctio modi eaque tenetur
							libero delectus atque dignissimos ullam reiciendis blanditiis nisi
							maxime, necessitatibus cumque laborum.
						</p>
						<ul>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Accurate and fast processing</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Multi-country payroll</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Payroll for remote and local teams</p>
							</li>
							<li>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
										></path>
									</svg>
								</div>
								<p>Tax compliance, EOR and PEO services</p>
							</li>
						</ul>
						<a href="" class="btn">Learn More</a>
					</div>
				</div>
			</div>
`;
