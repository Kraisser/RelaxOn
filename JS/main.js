document.getElementById(`hamburgerIconContainer`).addEventListener(`click`, function (e) {
	e.currentTarget.classList.toggle(`open`);
	document.getElementById(`hamburgerNavMenu`).classList.toggle(`hideMenu`);
});