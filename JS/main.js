document.getElementById(`hamburgerIconContainer`).addEventListener(`click`, function (e) {
	e.currentTarget.classList.toggle(`open`);
	document.getElementById(`hamburgerNavMenu`).classList.toggle(`hideMenu`);
	document.getElementById(`hamburgerNavUl`).classList.toggle(`hideMenu`);
});

sliderModule.sliderLogicInit(4); // Интервал в секундах