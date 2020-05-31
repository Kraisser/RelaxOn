document.getElementById(`hamburgerIconContainer`).addEventListener(`click`, function (e) {
	e.currentTarget.classList.toggle(`open`);
	document.getElementById(`hamburgerNavMenu`).classList.toggle(`hideMenu`);
});


let scrollTimerId;

window.addEventListener(`scroll`, function() {
	clearTimeout(scrollTimerId);
	if (document.body.clientWidth <= 700) {
		scrollTimerId = setTimeout(stocksHide, 50);
	}
});

function stocksHide() {
	if (pageYOffset >= 60) {
		document.getElementById(`stocks`).style.height = `0px`;		
		hamburgerTopAdopt(100);
	} else {
		document.getElementById(`stocks`).style.height = `60px`;
		hamburgerTopAdopt(160);
	}
	console.log(123);
}

function hamburgerTopAdopt(headerHeight) {
	document.getElementById(`hamburgerNavMenu`).style.top = `${headerHeight}px`;
}

sliderModule.sliderLogicInit(2); // Интервал в секундах