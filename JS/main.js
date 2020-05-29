document.getElementById(`hamburgerIconContainer`).addEventListener(`click`, function (e) {
	e.currentTarget.classList.toggle(`open`);
	document.getElementById(`hamburgerNavMenu`).classList.toggle(`hideMenu`);
	document.getElementById(`hamburgerNavUl`).classList.toggle(`hideMenu`);
});

window.addEventListener(`scroll`, function() {
	if (pageYOffset >= 60) {
		document.getElementById(`stocks`).style.display = `none`;
	} else {
		document.getElementById(`stocks`).style.display = `flex`;
	}
});

sliderModule.sliderLogicInit(2); // Интервал в секундах