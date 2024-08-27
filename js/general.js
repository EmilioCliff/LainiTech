const navLinksMore = document.querySelectorAll(".nav__link-more-btn");
navLinksMore.forEach((btn) => {
	btn.addEventListener("click", () => {
		const value = btn.dataset.value;
		let navDropDown = document.querySelector(`.nav-${value}`);
		let displayBtn = btn.querySelector("svg");
		let previousListBtn = document.querySelector(".opened");
		let previousShow = document.querySelector(".show");

		if (navDropDown.classList.contains("show")) {
			displayBtn.style.transform = "rotate(0deg)";
			navDropDown.classList.remove("show");
			btn.classList.remove("opened");
		} else {
			if (previousShow) {
				previousListBtn.querySelector("svg").style.transform = "rotate(0deg)";
				previousShow.classList.remove("show");
				previousListBtn.classList.remove("opened");
			}
			displayBtn.style.transform = "rotate(90deg)";
			navDropDown.classList.add("show");
			btn.classList.add("opened");
		}
	});
});

let navListMenu = document.querySelector(".nav__list");

let closeMenuBtn = document.querySelector(".nav__close-btn");
closeMenuBtn.addEventListener("click", () => {
	navListMenu.style.left = "-120%";
});

let menuToogleBtn = document.querySelector(".nav__toogle");
menuToogleBtn.addEventListener("click", () => {
	navListMenu.style.left = "0";
});

let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll_up");

function onScroll() {
	let header = document.querySelector("header");
	if (window.scrollY >= 150) {
		header.classList.add("is-visible");
	} else {
		header.classList.remove("is-visible");
	}

	if (window.scrollY >= 500) {
		scrollBtn.style.opacity = "1";
	} else {
		scrollBtn.style.opacity = "0";
	}
	scroll(onScroll);
}

let ticking = false;

function handleScroll() {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			onScroll();
			ticking = false;
		});
		ticking = true;
	}
}

window.addEventListener("scroll", handleScroll);

onScroll();
